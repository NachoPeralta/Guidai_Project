import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { productos } from "../data/data";

const getProducto = async (id) => {
    const db = getFirestore();
    const productRef = doc(db, "productos", id);
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
        const data = snapshot.data();
        const producto = {
            id: snapshot.id,
            categoria: data.categoria,
            codigo: data.codigo,
            descripcionCorta: data.descripcionCorta,
            descripcionLarga: data.descripcionLarga,
            img: data.img,
            precio: data.precio,
            stock: data.stock,
        };
        return producto;
    } else {
        console.log("Producto no encontrado");
        return null;
    }
};


const getProductos = async () => {
    const db = getFirestore();
    const productsRef = collection(db, "productos");
    const snapshot = await getDocs(productsRef);

    if (!snapshot.empty) {

        const productos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return productos;
    } else {
        console.log("No se encontraron productos");
        return [];
    }
};

const getProductosCategoria = async (categoria) => {
    const db = getFirestore();
    const productsRef = collection(db, "productos");
    const q = query(productsRef, where("categoria", "==", categoria));
  
    try {
      const querySnapshot = await getDocs(q);
  
      const productos = [];
  
      querySnapshot.forEach((doc) => {
        productos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
  
      return productos;
    } catch (error) {
      console.error("Error al obtener productos por categoría:", error);
      return [];
    }
  };
  


//Esta funcion es para agregar los productos de mi mock por unica vez
//No lo borré para poder usarlo mas adelante si necesito agregar otra lista mas de productos
const cargarProductos = async () => {
    const db = getFirestore();
    const prodsCollection = collection(db, "productos");

    try {
        await Promise.all(
            productos.map(async (producto) => {
                await addDoc(prodsCollection, producto);
            })
        );
        console.log("Todos los productos se agregaron con éxito");
    } catch (error) {
        console.error("Error al agregar productos:", error);
    }
};

export const productServices = { getProducto, getProductos, cargarProductos, getProductosCategoria };

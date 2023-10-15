import { doc, getDoc, getFirestore } from "firebase/firestore";

const getProducto = async () => {
    const db = getFirestore();
    const productRef = doc(db, "productos", "QWG0nwCRdQAIUSZsIHcm");
    const snapshot = await getDoc(productRef);

    if (snapshot.exists())
        return {
            id: snapshot.id,
            ...snapshot.data(),
        };
}

const getProductos = () => {
    
};


export const productServices = { getProducto, getProductos };
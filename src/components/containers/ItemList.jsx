import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { productServices } from "../../services/products";

const ItemList = () => {
  const [loadedProductos, setLoadedProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        if (categoria) {
          const productos = await productServices.getProductosCategoria(categoria);
          setLoadedProductos(productos);
        } else {
          const productos = await productServices.getProductos();
          setLoadedProductos(productos);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    cargarProductos();
  }, [categoria]);

  return (
    <div>
      <div>
        {loadedProductos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

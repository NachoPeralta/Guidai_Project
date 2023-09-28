import React, { useState, useEffect } from "react";
import { productos } from "../../data/data";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [loadedProductos, setLoadedProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const cargarProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    cargarProductos
      .then((res) => {
        if (categoria) {
          const productosFiltrados = res.filter(
            (item) => item.categoria === categoria
          );
          setLoadedProductos(productosFiltrados);
        } else {
          setLoadedProductos(res);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [categoria]);

  return (
    <div>
      <div>
        {loadedProductos.map((producto) => (
          <Item key={producto.codigo} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

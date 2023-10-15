import React from "react";
import ItemDetail from "../components/containers/ItemDetail";
import ItemListContainer from "../components/containers/ItemListContainer";
import { productServices } from "../services/products";

export const Productos = ({ id }) => {
  if (id) {
    // Si se proporciona un productId, obtén el producto correspondiente
    const producto = productServices.getProducto(id);

    if (producto) {
      return <ItemDetail producto={producto} />;
    } else {
      return <div>Producto no encontrado</div>;
    }
  } else {
    // Si no se proporciona un productId, muestra el ItemListContainer
    return <ItemListContainer greeting="Estos son nuestros Productos" />;
  }
};

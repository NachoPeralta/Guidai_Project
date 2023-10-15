import React from "react";
import ItemDetail from "../components/containers/ItemDetail";
import ItemListContainer from "../components/containers/ItemListContainer";
import { productServices } from "../services/productos";

export const Productos = ({ productId }) => {
  if (productId) {
    // Si se proporciona un productId, obtén el producto correspondiente
    const producto = productServices.getProductoById(productId);

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

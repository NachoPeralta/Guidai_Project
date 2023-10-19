import React from "react";
import { useCart } from "../../context/cartContext";
import ItemCount from "../containers/ItemCount";

const ItemDetail = (producto) => {
  const { categoria, descripcionLarga, descripcionCorta, precio, stock, img } = producto;
  const { agregarAlCarrito } = useCart();

  const onAdd = (cantidad) => {
    
    console.log("onAdd cantidad:" + cantidad);

    agregarAlCarrito({ producto, cantidad });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <h2>{categoria}</h2>
      <h3>Aroma: {descripcionCorta}</h3>
      <img src={img} alt={categoria} style={{ width: "25rem" }} />
      <br />
      <h4>{descripcionLarga}</h4>
      <br />
      <h4 className="card-title">Precio UYU $: {precio}</h4>
      <br />
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;

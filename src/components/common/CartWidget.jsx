import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";


const CartWidget = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div className="carrito-container" >
      <span className="carrito-btn">
      <img src="https://i.postimg.cc/LXLq73wJ/carrito-icon.png" alt="Carrito de compras" />
        <span>{carrito.length}</span>
      </span>
    </div>
  );
};

export default CartWidget;

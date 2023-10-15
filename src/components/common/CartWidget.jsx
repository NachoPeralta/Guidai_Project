import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div className="carrito-container">
      <Link to="/carrito" className="carrito-btn">
        <img src="https://i.postimg.cc/LXLq73wJ/carrito-icon.png" alt="Carrito de compras" />
        <span>{carrito.length}</span>
      </Link>
    </div>
  );
};

export default CartWidget;

import React from 'react';
import imgCarrito from '../../img/carrito-icon.png';

const CartWidget = () => {
  return (
    <div className="carrito-container">
      <a href="./">
        <button className="carrito-btn" id="carritoBtn">
          <img src={imgCarrito} alt="Carrito de compras" />
          4
        </button>
      </a>
    </div>
  );
};

export default CartWidget;
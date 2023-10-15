import React, { useContext } from "react";
import { CartContext } from "../context/cart";

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <tr key={producto.codigo}>
                <td>{producto.descripcionCorta}</td>
                <td>${producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn btn-primary">Terminar Compra</button>
    </div>
  );
};

export default Carrito;

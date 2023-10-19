import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Carrito = () => {
  const { carrito, quitarDelCarrito } = useContext(CartContext);

  console.log("Carrito en componente Carrito:", carrito);

  const calcularTotal = () => {
    let suma = 0;
    carrito.forEach((item) => {
      suma += item.cantidad * item.producto.precio;
    });
    return suma;
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Unidad</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.producto.codigo}>
                  <td>
                    {item.producto.categoria} - {item.producto.descripcionCorta}
                  </td>
                  <td>${item.producto.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.producto.precio * item.cantidad}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        quitarDelCarrito(item.producto.id);
                      }}
                    >
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total Pesos Uruguayos: ${calcularTotal()}</h4>
          <br />
        </>
      )}
      <button className="btn btn-primary">Terminar Compra</button>
    </div>
  );
};

export default Carrito;

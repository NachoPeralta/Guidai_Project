import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { productServices } from "../services/products";
import { Modal } from "bootstrap";

const Carrito = () => {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useContext(CartContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // datos del comprador
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo({
      ...buyerInfo,
      [name]: value,
    });
  };

  const calcularTotal = () => {
    let suma = 0;
    carrito.forEach((item) => {
      suma += item.cantidad * item.producto.precio;
    });
    return suma;
  };

  const enviarOrdenCompra = (e) => {
    e.preventDefault();

    const ordenCompra = {
      buyer: {
        name: buyerInfo.name,
        email: buyerInfo.email,
        phone: buyerInfo.phone,
      },
      items: carrito.map((item) => ({
        id: item.producto.id,
        title: `${item.producto.categoria} - ${item.producto.descripcionCorta}`,
        quantity: item.cantidad,
        price: item.producto.precio,
      })),
      total: calcularTotal(),
    };

    productServices.finalizarCompra(ordenCompra)
    .then(() => {
      const confirmationModal = new Modal(document.getElementById('confirmationModal'));
      document.querySelector('#confirmationModal .modal-title').textContent = 'Compra Exitosa';
      document.querySelector('#confirmationModal .modal-body').textContent = 'Su compra se ha realizado con éxito. \n Gracias por confiar en nosotros!!';
      confirmationModal.show();
    })
    .catch((error) => {
      const errorModal = new Modal(document.getElementById('confirmationModal'));
      document.querySelector('#confirmationModal .modal-title').textContent = 'Error en la Compra';
      document.querySelector('#confirmationModal .modal-body').textContent = 'Se ha producido un error al procesar la compra: ' + error.message;
      errorModal.show();
    });

  vaciarCarrito();
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div
            className="modal fade"
            id="confirmationModal"
            tabIndex="-1"
            aria-labelledby="confirmationModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="confirmationModalLabel">
                    Confirmación de Compra
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>

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
          <br />

          {mostrarFormulario && (
            <div>
              <form onSubmit={enviarOrdenCompra}>
                <h3>Orden de Compra</h3>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={buyerInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={buyerInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={buyerInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <button
                 type="submit"
                 className="btn btn-primary"
                 data-bs-toggle="modal"
                 data-bs-target="#confirmationModal"
                >
                  Enviar Orden de Compra
                </button>
              </form>
              <br />
              <br />
            </div>
          )}

          <h4>Total Pesos Uruguayos: ${calcularTotal()}</h4>
          <br />
        </>
      )}
      <button className="btn btn-primary" onClick={toggleFormulario}>
        {mostrarFormulario ? "Cerrar Formulario" : "Finalizar Compra"}
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          vaciarCarrito();
        }}
      >
        Cancelar Compra
      </button>
    </div>
  );
};

export default Carrito;

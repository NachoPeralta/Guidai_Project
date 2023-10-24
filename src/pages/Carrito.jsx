import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { productServices } from "../services/products";
import { Modal, Button, Form, Table } from "react-bootstrap";

const Carrito = () => {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useContext(CartContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("Procesando su Orden...");

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

  const handleClose = () => {
    setShow(false);
    setModalMessage("Procesando su Orden...");
  };
  const handleShow = () => {
    setShow(true);
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

    productServices
      .finalizarCompra(ordenCompra)
      .then(() => {
        // Éxito en la compra
        setModalMessage(
          "Su compra se ha realizado con éxito. ¡Gracias por confiar en nosotros!"
        );
        handleShow();
      })
      .catch((error) => {
        // Error en la compra
        setModalMessage(
          `Se ha producido un error al procesar la compra: ${error.message}`
        );
        handleShow();
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
          <Table striped bordered>
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
                    <Button
                      variant="danger"
                      onClick={() => {
                        quitarDelCarrito(item.producto.id);
                      }}
                    >
                      Quitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {mostrarFormulario && (
            <div>
              <Form>
                <h3>Orden de Compra</h3>
                <Form.Group>
                  <Form.Label htmlFor="name">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    value={buyerInfo.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="phone">Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    id="phone"
                    name="phone"
                    value={buyerInfo.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    value={buyerInfo.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" onClick={enviarOrdenCompra}>
                  Enviar Orden de Compra
                </Button>
              </Form>
            </div>
          )}
          <br />
          <h4 style={{ textAlign: "right" }}>
            Total Pesos Uruguayos: ${calcularTotal()}
          </h4>
          <br />
        </>
      )}

      <Button variant="primary" onClick={toggleFormulario}>
        {mostrarFormulario ? "Cerrar Formulario" : "Finalizar Compra"}
      </Button>

      <Button
        variant="danger"
        onClick={() => {
          vaciarCarrito();
        }}
      >
        Cancelar Compra
      </Button>
      <br />
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Carrito;

import React from "react";
import { useCart } from "../../context/cartContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemCount from "../containers/ItemCount";

const ItemDetail = (producto) => {
  const { categoria, descripcionLarga, descripcionCorta, precio, stock, img } = producto;
  const { agregarAlCarrito } = useCart();

  const onAdd = (cantidad) => {
    console.log("onAdd cantidad:" + cantidad);
    agregarAlCarrito({ producto, cantidad });
  };

  return (
    <Container style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="justify-content-center align-items-center py-5">
        <Col md={6}>
          <Card>
            <Card.Img src={img} alt={categoria} style={{ width: "100%" }} />
            <Card.Body>
              <Card.Title style={{fontSize:"26px"}}>{categoria}</Card.Title>
              <Card.Text style={{fontSize:"22px"}}>Aroma: {descripcionCorta}</Card.Text>
              <Card.Text style={{fontSize:"20px"}}>{descripcionLarga}</Card.Text>
              <Card.Text style={{fontSize:"24px"}}>Precio UYU $: {precio}</Card.Text>
              <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;

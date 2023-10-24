import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Image, Button } from "react-bootstrap";

const Item = ({ producto }) => {
  return (
    <>
    <Row className="row">
      <Col lg={12} className="slideInFromRight">
        <Card className="mb-4" style={{ height: "100%" }}>
          <Row className="g-0">
            <Col md={2} className="imagenProducto">
              <Image
                src={producto.img}
                alt={producto.descripcionCorta}
                fluid
              />
            </Col>
            <Col md={8}>
              <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                <div>
                  <Card.Title style={{fontSize:"24px"}}>
                    {producto.categoria} - Aroma: {producto.descripcionCorta}
                  </Card.Title>
                  <br />
                  <Card.Title style={{fontSize:"20px"}}>Precio UYU $: {producto.precio}</Card.Title>                  
                  <Link to={`/item/${producto.id}`}>
                    <Button variant="primary">Ir al detalle</Button>
                  </Link>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    <br />
    </>
  );
};

export default Item;

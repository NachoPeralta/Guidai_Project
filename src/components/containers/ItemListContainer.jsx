import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card bg="bg-transparent" text="text-primary" style={{ backgroundColor: "#f8f9fa", border:"none" }} className="p-4">
            <Card.Body>
              <h2>{greeting}</h2>
              <ItemList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;

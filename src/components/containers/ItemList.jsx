import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productServices } from "../../services/products";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = () => {
  const [loadedProductos, setLoadedProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        if (categoria) {
          const productos = await productServices.getProductosCategoria(categoria);
          setLoadedProductos(productos);
        } else {
          const productos = await productServices.getProductos();
          setLoadedProductos(productos);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    cargarProductos();
  }, [categoria]);

  return (
    <Container>
      <Row>
        {loadedProductos.map((producto) => (
          <Col key={producto.id} md={12}>
            <Item producto={producto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;

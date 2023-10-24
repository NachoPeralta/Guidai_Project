import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productServices } from '../../services/products';
import { Container } from 'react-bootstrap';
import ItemDetail from '../containers/ItemDetail';

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const producto = await productServices.getProducto(id);

        if (producto) {
          setDetalleProducto(producto);
        } else {
          console.log(`Producto con código ${id} no encontrado`);
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa" }}>
      {detalleProducto && <ItemDetail {...detalleProducto} />}
    </Container>
  );
};

export default ItemDetailContainer;

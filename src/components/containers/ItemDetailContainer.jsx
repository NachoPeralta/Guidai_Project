import React, { useEffect, useState } from 'react';
import ItemDetail from '../containers/ItemDetail';
import { useParams } from 'react-router-dom';
import { productServices } from '../../services/products';

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {  
    const fetchData = async () => {
      try {
        const producto = await productServices.getProducto(id);
        console.log('Datos del producto:', producto);

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
    <div>{detalleProducto && <ItemDetail {...detalleProducto} />}</div>
  );
};

export default ItemDetailContainer;

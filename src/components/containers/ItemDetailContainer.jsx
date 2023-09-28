import React, { useEffect, useState } from 'react';

import { productos } from '../../data/data';

import ItemDetail from '../containers/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  
  const { codigo } = useParams();
  useEffect(() => {  
    const product = productos.find((item) => item.codigo === parseInt(codigo));
    if (product) {
      setDetalleProducto(product);
    } else {
      console.log(`Producto con código ${codigo} no encontrado`);
    }
  }, [codigo]);

  return (
    <div>{<ItemDetail {...detalleProducto} />}</div>
  );
};

export default ItemDetailContainer;

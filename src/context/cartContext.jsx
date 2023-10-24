import { createContext, useState, useContext, React } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    const { producto, cantidad } = item;

    const existeProducto = carrito.find((item) => item.producto.id === producto.id);
    
    if (existeProducto) {
      // El producto ya está en el carrito, actualizo la cantidad
      const updatedCart = carrito.map((item) => {
        if (item.producto.codigo === producto.codigo) {
          return { producto: item.producto, cantidad: item.cantidad + cantidad };
        }
        return item;
      });
      setCarrito(updatedCart);
      
    } else {
      setCarrito([...carrito, { producto, cantidad }]);
    }
  };

  const quitarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
    
  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart Contexto no encontrado");
    }
    return context;
  };
  

import { createContext, useState, useContext, React } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const quitarDelCarrito = (codigo) => {
    const nuevoCarrito = carrito.filter((producto) => producto.codigo !== codigo);
    setCarrito(nuevoCarrito);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  };
  

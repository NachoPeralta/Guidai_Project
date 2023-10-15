import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import { CartProvider } from "./context/cart";
import { Productos } from "./pages/Productos";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/products/categoria/:categoria" element={<Productos />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route 
          path="/" element={<Home />} 
        />
        <Route
          path="/products"
          element={
            <ItemListContainer greeting="Estos son nuestros Productos" />
          }
        />
        <Route
          path="/products/categoria/:categoria"
          element={
            <ItemListContainer greeting="Listado de Productos por categoria:" />
          }
        />
        <Route path="/item/:codigo" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

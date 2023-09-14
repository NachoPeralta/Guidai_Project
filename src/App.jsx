import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.css";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Güidaí" />
      <Home />
    </div>
  );
}

export default App;

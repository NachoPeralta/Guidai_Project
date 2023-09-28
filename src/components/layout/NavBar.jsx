import React from "react";
import "../../style/main.css";
import CartWidget from "../common/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar" id="navbar">
      <NavLink className="logo" to="/">
        <img
          id="imgLogo"
          src="https://i.postimg.cc/y8Gk8GzJ/logo2.png"
          alt="Logo"
        />
      </NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            INICIO
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products" role="button">
            TODOS LOS PRODUCTOS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link" to="/products/categoria/Velas Aromaticas"
          >
            Velas Aromaticas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/products/categoria/Bombas de limpieza"
          >
            Bombas de Limpieza
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link" to="/products/categoria/Inciensos">
            Inciensos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link" to="/products/categoria/Aceites">
            Aceites
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link" to="/cart">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

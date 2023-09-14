import React from "react";
import logoGuidai from "../../img/logo2.png";
import CartWidget from "../common/CartWidget";
import "../../style/main.css";

const NavBar = () => {
  return (
    <nav className="navbar" id="navbar">
      <a className="logo" href="index">
        <img id="imgLogo" src={logoGuidai} alt="Logo" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            INICIO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">
            ACERCA DE NOSOTROS
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="./#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            PRODUCTOS
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href=".">
              Velas Aromaticas
            </a>
            <a className="dropdown-item" href=".">
              Bombas de limpieza
            </a>
            <a className="dropdown-item" href=".">
              Inciensos
            </a>
            <a className="dropdown-item" href=".">
              Aceites
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href=".">
              Mostrar Todos
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">
            CONTACTO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

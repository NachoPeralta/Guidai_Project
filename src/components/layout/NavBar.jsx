import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../style/main.css";
import CartWidget from "../common/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            id="imgLogo"
            src="https://i.postimg.cc/y8Gk8GzJ/logo2.png"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/">
                INICIO
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/products" role="button">
                TODOS LOS PRODUCTOS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/products/categoria/Velas Aromaticas">
                Velas Aromaticas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/products/categoria/Bombas de limpieza">
                Bombas de Limpieza
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/products/categoria/Inciensos">
                Inciensos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/products/categoria/Aceites">
                Aceites
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/carrito" className="carrito-container" >
                <CartWidget />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

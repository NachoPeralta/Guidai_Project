import React from "react";
import imgLogoHome from "../img/logo4.png";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        margin: "auto",
        padding: "0 15%",
        backgroundSize: "cover",
      }}
    >
      <img
        src={imgLogoHome}
        alt="Imagen de bienvenida"
        style={{
          display: "block",
          margin: "auto",
          maxWidth: "40%",
          paddingTop: "5%",
        }}
      ></img>
      <p
      style={{
        fontSize: '25px',
        color: 'black',
      }}
      >
        Somos una empresa dedicada a la venta de velas artesanales, inciensos y
        productos esotéricos. Ofrecemos una amplia variedad de productos de alta
        calidad para satisfacer las necesidades de nuestros clientes.
      </p>
    </div>
  );
};

export default Home;

import React from "react";

const Home = () => {
  
  return (
    <div
      style={{
        textAlign: "center",
        width: "60%",
        margin: "auto",
        marginTop: "70px",
        padding: "0 15%",
        backgroundSize: "cover",
      }}
    >
      <img
        src="https://i.postimg.cc/zDwbFpTM/logo4.png"
        alt="Imagen de bienvenida"
        style={{
          display: "block",
          margin: "auto",
          maxWidth: "40%",
        }}
      ></img>
      <p
      style={{
        fontSize: '25px',
        color: 'black',
        paddingTop: '5%'
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

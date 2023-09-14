import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        color: "rgb(93, 37, 146)",
        textAlign: "center",
        width: "100%",
        margin: "auto",
        padding: "0 15%",
        backgroundSize: "cover",
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;

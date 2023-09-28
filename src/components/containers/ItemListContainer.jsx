import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
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
      <h3>{greeting}</h3>
      
      <ItemList/>
      
    </div>
    </>
  );
};

export default ItemListContainer;

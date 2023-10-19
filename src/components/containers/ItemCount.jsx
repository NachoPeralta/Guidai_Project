import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  return (
    <>
      <div>
        <button className="btn btn-primary btn-lg" onClick={restar}>
          -
        </button>
        <span className="btn btn-lg">{count}</span>
        <button className="btn btn-primary btn-lg" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="btn btn-outline-primary btn-lg"
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(parseInt(count))}
      >
        Comprar
      </button>
    </>
  );
};

export default ItemCount;

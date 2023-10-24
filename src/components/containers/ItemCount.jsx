import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

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
      <ButtonGroup>
        <Button variant="primary" size="lg" onClick={restar}>
          -
        </Button>
        <Button variant="bg-light" size="lg">
          {count}
        </Button>
        <Button variant="primary" size="lg" onClick={sumar}>
          +
        </Button>
      </ButtonGroup>
      <Button
        variant="outline-primary"
        size="lg"
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(parseInt(count))}
      >
        Comprar
      </Button>
    </>
  );
};

export default ItemCount;

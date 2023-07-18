import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [numberOfProducts, setNumberOfProducts] = useState(initial);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setNumberOfProducts(value);
    }
  };

  const handleAdd = () => {
    if (numberOfProducts + 1 <= stock) {
      setNumberOfProducts(numberOfProducts + 1);
    }
  };

  const handleDecrease = () => {
    if (numberOfProducts - 1 >= initial) {
      setNumberOfProducts(numberOfProducts - 1);
    }
  };

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex">
          <Button variant="light" onClick={handleDecrease}>
            -
          </Button>
          <Form.Control
            type="number"
            id="products"
            style={{ width: "4rem" }}
            value={numberOfProducts}
            onChange={handleChange}
          />
          <Button variant="light" onClick={handleAdd}>
            +
          </Button>
        </div>
        <Button variant="success" className="mt-2 mb-2" onClick={() => onAdd(numberOfProducts)} disabled={!stock}>
          Agregar al carrito
        </Button>
      </div>
    </Container>
  );
};

export default ItemCount;

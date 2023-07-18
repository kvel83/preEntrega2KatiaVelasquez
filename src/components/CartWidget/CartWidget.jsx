import { Cart4 } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import './cartWidget.css';

const CartWidget = () => {
  return (
    <Badge pill className="d-flex align-items-center custom-badge">
      <Cart4 size={24} className="custom-badge" />
      <span className="ms-1 custom-badge">4</span>
    </Badge>
  );
};

export default CartWidget;

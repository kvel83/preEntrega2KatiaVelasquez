import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({props}) => {
    return (
        <Card style={{ width: '18rem', height: '30rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                <p>Stock: {props.stock}</p>
                <p>Precio: ${props.value}</p>
            </Card.Text>
            {/* <Button className="mt-auto backgroundButton">Ver Detalle</Button> */}
            <Link to={`/item/${props.id}`}>Ver Detalle</Link>
          </Card.Body>
        </Card>
      );
}

export default Item;
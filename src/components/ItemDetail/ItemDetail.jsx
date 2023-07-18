import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, value, desc, cat, stock}) => {
  return(
    <div className='d-flex aling-items-center'>
      <Card style={{ width: '21rem'}}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              <p>{desc}</p>
              <p>Precio: ${value}</p>
          </Card.Text>
          < ItemCount initial={1} stock={stock} onAdd={(productCount) => console.log('Cantidad agregada',)}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default  ItemDetail;















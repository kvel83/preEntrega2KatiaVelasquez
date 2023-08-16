import { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    const { cart, cleanCart} = useContext(StoreContext);
    const total = cart.reduce((total, product)=> total + product.quantity * product.value, 0);

    if(total === 0){
        return(
            <Container fluid className="vh-100 main d-flex flex-column align-items-center pt-5">
                <h1>No hay productos en el carrito</h1>
                <Button variant="success" className="mt-2 mb-2  w-25 buttonStyle"><Link to='/' className='text-white text-decoration-none'>Volver a productos</Link></Button>
            </Container>
        )
    }

    return(
        <Container fluid className="main vh-100 pt-3 d-flex flex-column justify-items-center align-items-center">
            <Table striped bordered hover className="text-center w-75">
                <thead>
                  <tr>
                    <th className="rowClass">Producto</th>
                    <th className="rowClass">Cantidad</th>
                    <th className="rowClass">Precio Unitario</th>
                    <th className="rowClass">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <CartItem key={product.id} product={product} index={index} />
                  ))}
                </tbody>
            </Table>
            <h3>Total del Carro: ${total}</h3>
            <Button onClick={cleanCart} className="buttonStyle">Limpiar carro de compras</Button>
            <Button className="buttonStyle mt-5" size="lg"><Link to='/checkout' className="buttonStyle text-decoration-none">Checkout</Link></Button>
        </Container>
    )
}

export default Cart;
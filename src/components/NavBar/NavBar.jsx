import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand className="brand-color" as={Link} to="/">Kawaii Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="links-color" href="#">Ofertas</Nav.Link>
            <NavDropdown className="links-color" title="Categorías" id="navbar-dropdown">
              <NavDropdown.Item className="links-color" as={Link} to= "/category/papeleria">Papelería</NavDropdown.Item>
              <NavDropdown.Item className="links-color" as={Link} to= "/category/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item className="links-color" as={Link} to= "/category/ropa">Ropa</NavDropdown.Item>
              <NavDropdown.Item className="links-color" as={Link} to= "/category/decoracion">Decoración</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="links-color" href="#">Formulario de contacto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="links-color" href="#">Políticas de envío</Nav.Link>
          </Nav>
          <Form className="d-flex gap-2" role="search">
            <FormControl className="me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
            <Button variant="outline-success" type="submit">Search</Button>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;

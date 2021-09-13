import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Cart } from 'react-bootstrap-icons';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand>A&AExports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/addProduct">Add Product</Link>
            <Link to="/addCategory">Add Category</Link>
          </Nav>

          <Nav>
            <Link>
              <Cart size={20} />(4)
            </Link>
            <Link to="/categories">Categories</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

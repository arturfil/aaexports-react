import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap'

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
            <Link to="/addProduct">Add Product</Link>
          </Nav>

          <Nav>
            <Link to="/">Categories</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

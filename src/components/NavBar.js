import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { useHistory } from "react-router";
import { isAuthenticated, logOut } from "../services/authService";
import { useEffect, useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (isAuthenticated()) {
      setAuthenticated(true);
    }
  };

  const handleLogOut = async () => {
    await logOut();
    setAuthenticated(false);
    history.push("/login");
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand>A&AExports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/addProduct">Add Product</Link>
            <Link to="/addCategory">Add Category</Link>
          </Nav>

          <Nav>
            {!isAuthenticated() ? (
              <>
                <Link className="btn btn-primary" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary" to="/login">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/orders">
                  <Cart size={20} />
                  (4)
                </Link>
                <button onClick={handleLogOut} className="btn btn-outline-dark">
                  Sign Out
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

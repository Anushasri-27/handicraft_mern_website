import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark"  className="navbar">
        <Container>
          <Navbar.Brand href="#home">KALAA</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/signup">Product</Link>
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;

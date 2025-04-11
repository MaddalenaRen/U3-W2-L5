import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MeteoNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
      className="shadow"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          ☀️ MeteoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MeteoNavbar;

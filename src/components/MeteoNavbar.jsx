import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MeteoNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MeteoNavbar;

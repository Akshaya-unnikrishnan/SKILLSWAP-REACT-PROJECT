import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function PublicNav() { 
  return (
    <Navbar bg="dark" data-bs-theme="dark"className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src="/ss-logo.png" alt=""width="60"height="60"style={{ objectFit: "contain" }}className="me-2" />
        SkillSwap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default PublicNav
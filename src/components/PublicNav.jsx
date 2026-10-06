import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function PublicNav() { 
  return (
  <Navbar expand="lg" sticky="top" className="py-2" style={{ backgroundColor: "#111111", borderBottom: "1px solid #2d2d2d" }}>
    <Container>

      {/* Logo + Brand */}
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-light fw-bold">
        <img src="/ss-logo.png" alt="SkillSwap Logo" width="50" height="50" style={{ objectFit: "contain" }} className="me-2" />

        <div>
          <div style={{ fontSize: "21px" }}>SkillSwap</div>
          <small className="text-secondary" style={{ fontSize: "11px" }}>LEARN • SHARE • GROW</small>
        </div>
      </Navbar.Brand>

      {/* Mobile Toggle */}
      <Navbar.Toggle aria-controls="public-navbar" />

      <Navbar.Collapse id="public-navbar">

        {/* Navigation */}
        <Nav className="me-auto ms-lg-5 mt-3 mt-lg-0">
          <Nav.Link as={Link} to="/" className="text-light fw-semibold px-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/register" className="text-light fw-semibold px-3">Register</Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-light fw-semibold px-3">Login</Nav.Link>
        </Nav>

        {/* CTA */}
        <button onClick={() => window.location.href = "/register"} className="btn mt-3 mt-lg-0 px-4 fw-semibold" style={{ backgroundColor: "#ffffff", color: "#111111", border: "none", borderRadius: "8px" }}>
          Get Started
        </button>

      </Navbar.Collapse>

    </Container>
  </Navbar>
)
}

export default PublicNav
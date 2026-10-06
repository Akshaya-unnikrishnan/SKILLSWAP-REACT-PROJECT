import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ setUser }) {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
    navigate("/login")
  }

  return (
  <Navbar expand="lg" sticky="top" className="py-2" style={{ backgroundColor: "#111111", borderBottom: "1px solid #2d2d2d" }}>
    <Container>

      {/* Logo + Brand */}
      <Navbar.Brand as={Link} to="/dashboard" className="d-flex align-items-center text-light fw-bold">
        <img src="/ss-logo.png" alt="SkillSwap Logo" width="50" height="50" style={{ objectFit: "contain" }} className="me-2" />

        <div>
          <div style={{ fontSize: "20px" }}>SkillSwap</div>
          <small className="text-secondary" style={{ fontSize: "11px" }}>LEARN • SHARE • GROW</small>
        </div>
      </Navbar.Brand>

      {/* Mobile Toggle */}
      <Navbar.Toggle aria-controls="user-navbar" />

      <Navbar.Collapse id="user-navbar">

        {/* Navigation */}
        <Nav className="me-auto ms-lg-4 mt-3 mt-lg-0">
          <Nav.Link as={Link} to="/dashboard" className="text-light fw-semibold px-3">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/discover" className="text-light fw-semibold px-3">Discover</Nav.Link>
          <Nav.Link as={Link} to="/requests" className="text-light fw-semibold px-3">Requests</Nav.Link>
          <Nav.Link as={Link} to="/connections" className="text-light fw-semibold px-3">Connections</Nav.Link>
          <Nav.Link as={Link} to="/profile" className="text-light fw-semibold px-3">Profile</Nav.Link>
        </Nav>

        {/* Logout */}
        <button onClick={handleLogout} className="btn mt-3 mt-lg-0 px-4 fw-semibold" style={{ backgroundColor: "#ffffff", color: "#111111", border: "none", borderRadius: "8px" }}>
          Logout
        </button>

      </Navbar.Collapse>

    </Container>
  </Navbar>
)
}

export default Header
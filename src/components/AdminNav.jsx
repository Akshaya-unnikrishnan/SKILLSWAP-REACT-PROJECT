import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AdminNav({ setUser }) {
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
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-light fw-bold">
        <img src="/ss-logo.png" alt="SkillSwap Logo" width="50" height="50" style={{ objectFit: "contain" }} className="me-2" />

        <div>
          <div style={{ fontSize: "20px" }}>SkillSwap</div>
          <small className="text-secondary" style={{ fontSize: "11px" }}>ADMIN PANEL</small>
        </div>
      </Navbar.Brand>

      {/* Navigation */}
      <Nav className="me-auto ms-4">
        <Nav.Link as={Link} to="/admin" className="text-light fw-semibold px-3">ADMIN</Nav.Link>
        <Nav.Link as={Link} to="/manage" className="text-light fw-semibold px-3">MANAGE SKILLS</Nav.Link>
      </Nav>

      {/* Logout */}
      <button onClick={handleLogout} className="btn px-4 fw-semibold" style={{ backgroundColor: "#ffffff", color: "#111111", borderRadius: "8px", border: "none" }}>
        Logout
      </button>

    </Container>
  </Navbar>
)
}

export default AdminNav
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
    <Navbar bg="dark" data-bs-theme="dark"className="sticky-top">
      <Container>

        <Navbar.Brand as={Link} to="/dashboard">
        <img src="/ss-logo.png" alt=""width="60"height="60"style={{ objectFit: "contain" }}className="me-2" />
          SkillSwap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/discover"> Discover</Nav.Link>
          <Nav.Link as={Link} to="/requests">Requests</Nav.Link>
          <Nav.Link as={Link} to="/connections">Connections</Nav.Link>
          <Nav.Link as={Link} to="/profile"> Profile</Nav.Link>
        </Nav>
          <button onClick={handleLogout}className="btn btn-danger">Logout</button>
      </Container>
    </Navbar>
  )}

export default Header
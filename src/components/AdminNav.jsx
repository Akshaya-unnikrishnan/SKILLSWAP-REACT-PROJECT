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
    <Navbar bg="dark" data-bs-theme="dark"className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src="/ss-logo.png" alt=""width="60"height="60"style={{ objectFit: "contain" }}className="me-2" />
          SkillSwap</Navbar.Brand>
 <Nav className="me-auto">
    <Nav.Link as={Link} to="/admin">ADMIN</Nav.Link>
          <Nav.Link as={Link} to="/manage">MANAGE SKILLS</Nav.Link>
 </Nav> 
          <button onClick={handleLogout}className="btn btn-danger">Logout</button>
      </Container>
    </Navbar>
  )
}

export default AdminNav
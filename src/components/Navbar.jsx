import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/react.svg"; // ✅ better to use relative path
import "./component_css/Navbar.css";

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="glass-navbar">
      <BootstrapNavbar.Brand as={Link} to="/" className="brand-logo">
        <img
          src={logo}
          alt="Logo"
          width="35"
          height="35"
          className="d-inline-block align-top logo-img"
        />{" "}
        <span className="brand-text">Student App</span>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Students 👨‍🎓</Nav.Link>
          <Nav.Link as={Link} to="/attendance">Attendance 🙋🏻‍♂️</Nav.Link>
          <Nav.Link as={Link} to="/grades">Grades 🏆</Nav.Link>
          <Nav.Link as={Link} to="/financial">Financial 💳</Nav.Link>
          <Nav.Link as={Link} to="/parent-portal">Parent Portal 👨‍👦</Nav.Link>
          <Nav.Link as={Link} to="/admin">Admin 👨‍✈️</Nav.Link>
          <Nav.Link as={Link} to="/my-students">My Students 👩‍🎓</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;

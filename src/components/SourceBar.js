import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import logo from "../images/logo.png";

function SourceBar() {
  return (
    <div className="container-fluid">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="bg-warning"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto h4">
              <Nav.Link href="#features">Classes</Nav.Link>
              <Nav.Link href="#pricing">Prices & Plans</Nav.Link>
              <Nav.Link href="#pricing">Trainers</Nav.Link>
              <NavDropdown title="More Info" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Personal Training
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Schedule</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign Up</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="h5">
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default SourceBar;

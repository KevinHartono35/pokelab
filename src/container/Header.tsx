import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

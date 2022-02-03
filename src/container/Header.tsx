import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="nav-title">PokeLab</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="text-warning">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

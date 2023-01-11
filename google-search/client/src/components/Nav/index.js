import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="search">Google Book Search</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="search">Search</Nav.Link>
            <Nav.Link href="saved">Saved</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigationbar;
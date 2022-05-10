import React from "react";
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function HomeNavbar() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>Bookseller</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {/* (Line below) add navdropdown for books, inside add genres */}
              <Nav.Link as={Link} to='/books'>Books</Nav.Link>
              <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
              <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
              <Nav.Link as={Link} to='/'>Sign out</Nav.Link>
              <Nav.Link as={Link} to='/checkout'>Basket</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
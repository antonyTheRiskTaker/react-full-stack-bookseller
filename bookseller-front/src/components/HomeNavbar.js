import React from "react";
import { Link } from 'react-router-dom';

import homeNavbarStyle from './home-navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

import LogoutButton from './LogoutButton';

export default function HomeNavbar(props) {
  return (
    <>
      <Navbar className='home-navbar' expand='lg' style={homeNavbarStyle}>
        <Container>
          <Navbar.Brand as={Link} to='/'>bookseller</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
              <Nav.Link as={Link} to='/books'>Books</Nav.Link>
              <Nav.Link as={Link} to='/bookpage'>Demo Bookpage</Nav.Link>
              {props.authentication ? (
                <NavItem>
                  <LogoutButton />
                </NavItem>
              ) : (
                <>
                  <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                  <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
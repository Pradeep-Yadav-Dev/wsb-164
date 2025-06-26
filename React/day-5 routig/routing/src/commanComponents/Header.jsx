import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
      <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home">
            <img style={{height:"50px"}} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className='fs-2' >
              <Link to={"/"} > Home </Link>
            </Nav.Link>
            <Nav.Link  className='fs-2'>
              <Link to={"/about"} > About </Link>
            </Nav.Link>
            <Nav.Link  className='fs-2'>
               <Link to={"/gallery"} > Gallery </Link>
            </Nav.Link>
            <Nav.Link  className='fs-2'>
               <Link to={"/contact"} > Contact </Link>
            </Nav.Link>
            <Nav.Link  className='fs-2'>
               <Link to={"/sale"} > Sale </Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {
    

    let slug="/study-tabel"
    return (

        <Navbar expand="lg" className="bg-danger">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav className='mx-5 fs-2 ' >
                            <Link href={"/"}>Home</Link>
                        </Nav>

                        <Nav className='mx-5 fs-2 ' >
                            <Link href={"/about-us"}>About</Link>
                        </Nav>

                        <Nav className='mx-5 fs-2 ' >
                            <Link href={`/categories${slug}`}>Categories</Link>
                        </Nav>


                        <Nav className='mx-5 fs-2 ' >
                            <Link href={"/"}>Home</Link>
                        </Nav>


                        <Nav className='mx-5 fs-2 ' >
                            <Link href={"/"}>Home</Link>
                        </Nav>


                        <Nav className='mx-5 fs-2 ' >
                            <Link href={"/"}>Home</Link>
                        </Nav>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

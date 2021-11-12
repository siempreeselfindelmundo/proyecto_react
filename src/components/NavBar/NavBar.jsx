import React from 'react'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';




let linkDecoration = {
    textDecoration: 'none'
}

const NavBar = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <Link to="/">
                <Navbar.Brand href="#">Navbar brand</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to='/'>Home</Link>
                        <Link to='/category/frio'> Colores Fríos </Link> 
                        <Link to='/category/calido'> Colores Cálidos </Link> 
                        <Link to='/cart'>
                            <CartWidget/> 
                        </Link>
                        
                    </ Nav>
                </ Navbar.Collapse>
            </Container>
       </Navbar>
    )
}

export default NavBar


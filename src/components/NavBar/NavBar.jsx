import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from "./CartWidget"


const NavBar = () => {
    const { cantidadItem } = useCartContext()
    return (
        <Navbar className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-sans" role="navigation">
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <Link to="/" className="px-4 font-bold text-2xl" >
                A.M. Florist
            </Link>
            <Nav className="pr-8 md:block hidden" >
                <Link to='/productos' className="p-4">Ver todo</Link>
                <Link to='/category/frio' className="p-4"> Colores Fríos </Link> 
                <Link to='/category/calido' className="p-4"> Colores Cálidos </Link> 
            </ Nav>
            <Link to='/cart' className="px-4">
                { cantidadItem() !== 0 && cantidadItem()}
                <CartWidget /> 
            </Link>    
       </Navbar>
    )
}

export default NavBar


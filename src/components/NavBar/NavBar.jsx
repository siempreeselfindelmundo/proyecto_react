import React from 'react'
import CartWidget from "./CartWidget"



let linkDecoration = {
    textDecoration: 'none'
}

const NavBar = () => {
    return (
        <div>
            <h1>Menú E-Commerce</h1>
            <nav>
                <ul style={{textDecoration:'none', display:'flex', justifyContent:'space-around', listStyleType:'none'}}>
                    <a href="#" style={linkDecoration}><li>Home</li></a>
                    <a href="#" style={linkDecoration}><li>About us</li></a>
                    <a href="#" style={linkDecoration}><li>Contact</li></a>
                    <a href="#" style={linkDecoration}><li> <CartWidget/> </li></a>
            
                </ul>

            </nav>
        </div>
    )
}

export default NavBar


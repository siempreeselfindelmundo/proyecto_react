import React from 'react'
import { Link } from 'react-router-dom'


const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
            className={
                isOpen 
                    ? 'grid grid-rows-3 text-center items-center' 
                    : 'hidden'
            }
            onClick={toggle}
        >
            <Link to='/productos' className="p-4">Ver todo</Link>
            <Link to='/category/frio' className="p-4"> Colores Fríos </Link> 
            <Link to='/category/calido' className="p-4"> Colores Cálidos </Link> 
        </div>
    )
}

export default Dropdown

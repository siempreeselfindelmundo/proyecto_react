import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h3 className="text-4xl">Ups! Aún no hay nada aquí </h3>
            <Link to="/productos" className="py-8">
                <button className="bg-yellow-500 py-4 px-8 rounded-full">Vamos a ver!</button>
            </Link>
        </div>
    )
}

export default NotFound

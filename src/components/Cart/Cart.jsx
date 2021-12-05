import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import NotFound from '../NotFound/NotFound'

export const Cart = () => {

    const {cartList, limpiarCarro, eliminarItem,  sumaPrecioItems} = useCartContext()

    return (
        <div>
            { !cartList.length > 0 ?
                <>
                    <NotFound />
                </>    
                :
                <div className="flex flex-col items-center">
                <h3 className="text-3xl py-8">Carrito</h3>
                
                {cartList.map(prod => 
                    <div key={prod.id} className="flex justify-center items-center py-4 px-2 border-2">
                        <img src={prod.pictureUrl} className="rounded h-32 mx-6" alt=""/>
                        <div className="mx-6">
                            <h4 className="text-lg">{prod.title}</h4>
                            <div className="flex flex-col items-start">
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio unitario: {prod.price}€</p>
                                <p>Subtotal: {prod.price * prod.cantidad}€</p>
                            </div>
                        </div>
                        <button className="bg-red-700 text-white p-2 rounded mx-6 " key={prod.id} onClick={()=> eliminarItem(prod.id) }>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                )}
                        
                <h4 className="text-2xl font-bold py-8">Total: {sumaPrecioItems()}€</h4>
                <div className="py-20">
                    <Link to='/checkout'>
                        <button className="border-2 border-black px-5 py-2 rounded bg-black text-white hover:bg-white hover:text-black mr-2 shadow">Check-Out</button>
                    </Link>
                    <button onClick={ limpiarCarro } className="border-2 border-black px-5 py-2 rounded hover:bg-black hover:text-white ml-2 shadow">Limpiar Carrito</button>
                </div>

                </div>
            }
        </div>
    )
}

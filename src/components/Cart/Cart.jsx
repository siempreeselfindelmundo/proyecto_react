import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import NotFound from '../NotFound/NotFound'

export const Cart = () => {

    const {cartList, limpiarCarro, eliminarItem,  sumaPrecioItems} = useCartContext()

    return (
        <div className="h-full">
            { !cartList.length > 0 ?
                <>
                    <NotFound className="flex justify-center"/>
                </>    
                :
                <div className="flex flex-col items-center h-full">
                    <h3 className="title">Carrito</h3>
                    
                    {cartList.map(prod => 
                    <Link to={`/details/${prod.id}`}>
                        <div key={prod.id} className="cart-item-container">
                            <img src={prod.pictureUrl} className="rounded h-32 mx-6" alt=""/>
                            <div className="mx-3">
                                <h4 className="text-lg my-3">{prod.title}</h4>
                                <div className="flex flex-col items-start mb-3">
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio unitario: {prod.price}€</p>
                                    <p>Subtotal: {prod.price * prod.cantidad}€</p>
                                </div>
                            </div>
                            <button className="btn-delete" key={prod.id} onClick={()=> eliminarItem(prod.id) }>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </Link>
                      
                    )}
                        
                    <h4 className="text-2xl font-bold py-8">Total: {sumaPrecioItems()}€</h4>
                    <div className="pt-8 flex">
                        <Link to='/checkout'>
                            <button className="btn-primary">Check-Out</button>
                        </Link>
                        <button onClick={ limpiarCarro } className="btn-secondary ml-2">Limpiar Carrito</button>
                    </div>

                </div>
            }
        </div>
    )
}

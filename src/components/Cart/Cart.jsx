import React from 'react'
import { useCartContext } from '../../context/CartContext'


export const Cart = () => {

    const {cartList, limpiarCarro, eliminarItem, sumaPrecioItems, cantidadItem} = useCartContext()
    
    

    return (
        <div>
            <h3>Cart</h3>
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                </tr>
            
            {cartList.map(prod => 
                <tr key={prod.id}>
                    <th>{prod.title}
                    <img src={prod.pictureUrl} alt="product_picture" /> </th>
                    <th>{prod.cantidad}</th>
                    <th>{prod.price}</th>
                    <th><button className="btn btn-secondary btn-danger btn-sm" onClick={ eliminarItem }>x</button> </th>
                </tr>
            )}
            </table>            
            <h4>Total: {}</h4>
            <button>Pagar</button>
            <button onClick={ limpiarCarro }>Limpiar Carrito</button>
        </div>
    )
}

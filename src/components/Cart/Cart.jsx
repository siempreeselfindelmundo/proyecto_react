import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import NotFound from '../NotFound/NotFound'


export const Cart = () => {

    const {cartList, limpiarCarro, eliminarItem} = useCartContext()
    const [carroVacio, setCarroVacio] = useState(false)

    const handlerCarroVacio = (carroVacio) => {
        setCarroVacio(false)

    }
    
    return (
        <div>
            

            { carroVacio ? 
                <>
                <Link to='/'>
                    <NotFound />
                    Ir al Home</Link>
                </>  
                
                :
                
            <>
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
                        {/* <img src={prod.pictureUrl} alt="product_picture" />  */}
                    </th>
                    <th>{prod.cantidad}</th>
                    <th>{prod.price}</th>
                    <th><button className="btn btn-secondary btn-danger btn-sm" key={prod.id} onClick={()=> eliminarItem(prod.id) }>x</button> </th>
                </tr>
            )}
            </table>            
            <h4>Total: {}</h4>
            <button>Pagar</button>
            <button onClick={ limpiarCarro }>Limpiar Carrito</button>
            </>
            }
        </div>
            
    )
}

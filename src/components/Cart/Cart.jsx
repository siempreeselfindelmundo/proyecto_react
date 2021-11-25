import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../services/getFirestore'
import NotFound from '../NotFound/NotFound'
import firebase from "firebase"
import 'firebase/firestore'

export const Cart = () => {

    const {cartList, limpiarCarro, eliminarItem, condicionCarroVacio, sumaPrecioItems} = useCartContext()
   
    // GENERAR ORDEN DE COMPRA
    const generarOrden = (e) => {
        e.preventDefault()

        // GENERA BUYER, ITEMS Y TOTAL PRICE
        const ordenCompra = {}
        ordenCompra.buyer = {name:'Loreto', email:'mimail@correo.com', phone:'648648648'}
        ordenCompra.total = sumaPrecioItems()
        ordenCompra.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
            const date = firebase.firestore.Timestamp.fromDate(new Date())
            return {id, title, price, date}
        })
        console.log('ORDEN DE COMPRA: ', ordenCompra)
        // CONEXION A FIREBASE, GENERA ORDEN Y NUEVA COLECCIÓN
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(ordenCompra)
        .then(resp => console.log('RESPUESTA ORDEN COMPRA: ', resp))
        .catch(err => console.log('ERROR ORDEN COMPRA: ', err))
        .finally()

        // ACTUALIZA STOCK DESPUÉS DE CADA COMPRA
        // const itemsToUpdate = dbQuery.collection('productos').where(
        //     firebase.firestore.Fieldpath.documentId() , 'in', cartList.map(i => i.id)
        // )
        // const batch = dbQuery.batch()
         
        // //POR CADA ITEM RESTAR LA CANTIDAD DEL CARRITO EN STOCK
        // itemsToUpdate.get()
        // .then(collection=> {
        //     collection.docs.forEach(docSnapshot => {
        //         batch.update(docSnapshot.ref, {
        //             stock: docSnapshot.data().stock - cartList.find(
        //                 item => item.id === docSnapshot.id).cantidad
        //         })
        //     })
        //     batch.commit().then(res => {
        //         console.log('STOCK ACTUALIZADO')
        //     })
        
        // })
    }




    return (
        <div>
            { !cartList.length > 0 ?
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
                    <th>Precio unidad</th>
                    <th>Subtotal</th>
                    <th>Eliminar</th>
                </tr>
            
            {cartList.map(prod => 
                <tr key={prod.id}>
                    <th>{prod.title}
                        {/* <img src={prod.pictureUrl} alt="product_picture" />  */}
                    </th>
                    <th>{prod.cantidad}</th>
                    <th>{prod.price}</th>
                    <th>{prod.price * prod.cantidad}</th>
                    <th><button className="btn btn-secondary btn-danger btn-sm" key={prod.id} onClick={()=> eliminarItem(prod.id) }>x</button> </th>
                </tr>
            )}
            </table>            
            <h4>Total: { sumaPrecioItems()}</h4>
            <button onClick={ generarOrden }>Check-Out</button>
            <button onClick={ limpiarCarro }>Limpiar Carrito</button>
            </>
            }

        </div>
            
    )
}

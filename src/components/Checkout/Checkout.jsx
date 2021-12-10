import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../services/getFirestore'
import 'firebase/firestore'
import firebase from "firebase"
import Modal from '../Modal/Modal'
import Form from './Form'

const Checkout = () => {
    const [orderID, setOrderID] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [showModal, setShowModal] = useState(false)
    const {cartList, sumaPrecioItems} = useCartContext()
    

    const generarOrden = (e) => {
        e.preventDefault()

        // GENERA BUYER, ITEMS Y TOTAL PRICE
        const ordenCompra = {}
        ordenCompra.buyer = { name, email, phone }
        ordenCompra.total = sumaPrecioItems()
        ordenCompra.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
            const date = firebase.firestore.Timestamp.fromDate(new Date())
            return {id, title, price, date}
        })
        
        // CONEXION A FIREBASE, GENERA ORDEN Y NUEVA COLECCIÓN
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(ordenCompra)
        .then(resp => setOrderID(resp.id))
        .catch(err => console.log('ERROR ORDEN COMPRA: ', err))
        .finally()

        // SE ACTUALIZA STOCK 
        const itemsToUpdate = dbQuery.collection('productos').where(
            firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.id)
        )
        const batch = dbQuery.batch()
        itemsToUpdate.get()

        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('STOCK ACTUALIZADO', res)
            })
        })

    }       
    
    const notValid = 
        !(name.length &&
        email.length &&
        phone.length &&
        emailValid.length > 0 &&
        email === emailValid
        )


    return (
        <div className="checkout-container">
            <h2 className="title">Completa tus datos</h2>
            <p className="pb-4">Para poder confirmar la compra, ingresa tus datos:</p>
            <Form
                generarOrden={generarOrden}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                emailValid={emailValid}
                setEmailValid={setEmailValid}
                notValid={notValid}
                setShowModal={setShowModal}/>

            <Modal
                orderID={orderID}
                showModal={showModal}
                setShowModal={setShowModal}
                generarOrden={generarOrden}/>
        </div>
    )
}
export default Checkout

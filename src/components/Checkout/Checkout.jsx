import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../services/getFirestore'
import 'firebase/firestore'
import firebase from "firebase"
import Modal from '../Modal/Modal'

const Checkout = () => {
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
        console.log('ORDEN DE COMPRA: ', ordenCompra)
        // CONEXION A FIREBASE, GENERA ORDEN Y NUEVA COLECCIÓN
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(ordenCompra)
        .then(resp => console.log(`Genial! Tu orden de compra es: ${resp.id}`))
        .catch(err => console.log('ERROR ORDEN COMPRA: ', err))
        .finally()
        
    }

    const handlerModal = () => {
        setShowModal(!showModal)
        console.log('MODAL: ', showModal);
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold py-8">Completa tus datos</h2>
            <p className="pb-4">Para poder confirmar la compra, ingresa tus datos:</p>
            <form 
            className="flex flex-col items-start justify-center"
            >
                <div className="my-1 flex flex-col items-start">
                    <label className="text-lg mr-2 " htmlFor="nombreBuyer">Nombre<span className="text-red-500">*</span></label>
                    <input required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="border-2 rounded px-4" 
                        type="text"
                        placeholder="Nombre completo"/>
                </div>
                <div className="my-1 flex flex-col items-start">
                    <label className="text-lg mr-2" htmlFor="email">Email<span className="text-red-500">*</span></label>
                    <input required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="border-2 rounded px-4" 
                        type="email" 
                        placeholder="Email"/>
                </div>
                <div className="my-1 flex flex-col items-start">
                    <label className="text-lg mr-2" htmlFor="email">Repite tu email<span className="text-red-500">*</span></label>
                    <input required
                        value={emailValid}
                        onChange={(e)=>setEmailValid(e.target.value)}
                        className="border-2 rounded px-4" 
                        type="email"  
                        placeholder="Repite tu email"/>
                </div>
                <div className="my-1 flex flex-col items-start">
                    <label className="text-lg mr-2" htmlFor="email">Número de teléfono<span className="text-red-500">*</span></label>
                    <input required
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        className="border-2 rounded px-4" 
                        type="tel" 
                        placeholder="Número de teléfono"/>
                </div>
                <div className="flex py-8">
                    <Link to="/cart">
                        <button className="border-2 border-black px-5 py-2 rounded hover:bg-black hover:text-white mr-2 shadow"> ← Atrás</button>
                    </Link>
                    <button 
                        onClick={generarOrden, handlerModal} 
                        className="border-2 border-black px-5 py-2 rounded bg-black text-white hover:bg-white hover:text-black ml-2 shadow">Confirmar compra</button>
                </div>
            </form>
            {showModal && <Modal closeModal={setShowModal}/>}
        </div>
    )
}

export default Checkout

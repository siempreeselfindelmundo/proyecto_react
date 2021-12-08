import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Modal = ({showModal, setShowModal}) => {


    return (
        <>
        {showModal && 
            <div className="w-screen h-screen bg-black fixed flex justify-center items-center bg-opacity-75"> 
                <div className="rounded bg-white shadow-md flex flex-col p-12">
                    <div className="flex justify-end">
                        <button
                            onClick={()=> setShowModal(false)}
                            className="rounded-full border text-black"> 
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
                        </button>
                    </div>
                    <div className="py-12">
                        <h1 className="text-lg font-bold pb-7">Genial! Gracias por tu compra:</h1>
                        <p>Te enviaremos un correo cuando tu pedido salga de nuestro almacén.</p>
                        <p className="py-2">Tu código de referencia es: <span className="font-bold">29837498274</span> </p>
                    </div>
                    <Link to="/productos">
                        <button className="bg-yellow-500 px-3 py-2 rounded-full">OK</button>
                    </Link>
                </div>
            </div>
        }
        </>
    )
}

export default Modal

import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Modal = ({showModal, setShowModal}) => {


    return (
        <>
        {showModal && 
            <div className="w-screen h-screen bg-black fixed flex justify-center items-center bg-opacity-75"> 
                <div className="rounded bg-white shadow-md flex flex-col p-6 opacity-100">
                    <button
                        onClick={()=> setShowModal(false)}
                        className="rounded-full border bg-black text-white"> 
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
                    </button>
                    <h1>Genial! Gracias por tu compra</h1>
                    <p>Tu código de referencia es: 29837498274</p>
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

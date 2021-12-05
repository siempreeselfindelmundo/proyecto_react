import React from 'react'

const Modal = ({closeModal}) => {
    return (
        <div className="w-screen h-screen bg-gray-400 fixed flex justify-center items-center opacity-50"> 
            <div className="rounded bg-white shadow-md flex flex-col p-6">
                <button
                    onClick={closeModal(false)} 
                    className="rounded-full border bg-black text-white"> 
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
                </button>
                <h1>Genial! Gracias por tu compra</h1>
                <p>Tu código de referencia es: 29837498274</p>
                <button className="bg-yellow-500 px-3 py-2 rounded-full">OK</button>
            </div>
        </div>
    )
}

export default Modal

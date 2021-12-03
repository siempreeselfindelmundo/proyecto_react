import React from 'react'

const Form = () => {
    return (
        <div className="flex justify-center">
            <form className="flex flex-col items-start">
                <div className="my-1">
                    <label className="text-xl mr-2 " htmlFor="nombreBuyer">Nombre</label>
                    <input className="border-2 rounded" type="text" name="name" required/>
                </div>
                <div className="my-1">
                    <label className="text-xl mr-2" htmlFor="email">Email</label>
                    <input className="border-2 rounded" type="email" name="email1" required/>
                </div>
                <div className="my-1">
                    <label className="text-xl mr-2" htmlFor="email">Repite tu email</label>
                    <input className="border-2 rounded" type="email" name="email2" required/>
                </div>
                <div className="my-1">
                    <label className="text-xl mr-2" htmlFor="email">Número de teléfono</label>
                    <input className="border-2 rounded" type="" name="email2" required/>
                </div>
            </form>
        </div>
    )
}

export default Form

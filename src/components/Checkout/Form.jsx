import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({generarOrden, name, setName, email, setEmail, emailValid, setEmailValid, phone, setPhone, notValid, setShowModal}) => {
    return (
        <div>
            <form 
            onSubmit={generarOrden}
            className="form-container">
                <div className="items-start">
                    <div className="form-field">
                        <label className="form-label" htmlFor="nombreBuyer">Nombre<span className="text-red-500">*</span></label>
                        <input required
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="form-input" 
                            type="text"
                            placeholder="Nombre completo"/>
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="email">Email<span className="text-red-500">*</span></label>
                        <input required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className={notValid ? 'form-input border-red-500' : 'form-input'} 
                            type="email"
                            placeholder="Email"
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"/>
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="email">Repite tu email<span className="text-red-500">*</span></label>
                        <input required
                            value={emailValid}
                            onChange={(e)=>setEmailValid(e.target.value)}
                            className={notValid ? 'form-input border-red-500' : 'form-input'}  
                            type="email"  
                            placeholder="Repite tu email"/>
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="email">Número de teléfono<span className="text-red-500">*</span></label>
                        <input required
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            className="form-input" 
                            type="tel" 
                            placeholder="Número de teléfono"/>
                    </div>
                </div>
                <div className="form-btn-container">
                    <Link to="/cart">
                        <button className="btn-secondary mr-2"> ← Atrás</button>
                    </Link>
                    <button 
                        type="submit"
                        disabled={notValid}
                        onClick={() => setShowModal(true)}
                        className="btn-primary ml-2 disabled:opacity-25 ">Confirmar compra</button>
                </div>
            </form>
        </div>
    )
}

export default Form

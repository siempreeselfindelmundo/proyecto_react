import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


 const ItemDetail = ( {prod} ) => {

    const {agregarCarrito} = useContext(CartContext)

    const handlerOnAdd = (cantidad) => {
        setwasClicked(true)
        agregarCarrito({ ...prod, cantidad: cantidad })        
    }

    const [wasClicked, setwasClicked] = useState(false)
  
    return (
        <div>
            <Link to="/productos" className="pt-5 pl-2 flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                <p className="pl-2">Volver</p>
            </Link>
            <div className="item-detail-container h-screen" key={`${prod.id}`}> 
                <img src={`${prod.pictureUrl}`} className="rounded mb-12 shadow-md" alt="" />
                <div className="item-detail-container-text">
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl">{`${prod.title}`}</h3>
                        <p className="text-xl">{`${prod.price}`}€</p>
                        <div className="details-text">
                            <p>Medidas: 148x220mms</p>
                            <p>Papel: Couché</p>
                            <p>Acabado: Mate</p>
                            <p>REF: {`${prod.id}`}</p>
                        </div>
                    </div>
                    <div>
                        {wasClicked ?
                            <> 
                                <ItemCount initial={0} stock={50} onAdd={handlerOnAdd} />
                                <div className="flex my-5">
                                    <Link to='/productos'> <button className="btn-secondary mr-2"> Seguir comprando </button></Link> 
                                    <Link to='/cart'> <button className="btn-primary ml-2"> Ir al Carrito </button></Link> 
                                </div>
                            </>
                            : 
                            <ItemCount initial={1} stock={50} onAdd={handlerOnAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

let cardWidth = {
    width: '36rem'
}

 const ItemDetail = ( {prod} ) => {

    const {cartList, agregarCarrito} = useContext(CartContext)
    const [carroVacio, setCarroVacio] = useState(true)
  

    const handlerOnAdd = (cantidad) => {
        console.log('CANTIDAD: ', cantidad)
        setwasClicked(true)
        setCarroVacio(false)
        agregarCarrito({ ...prod, cantidad: cantidad })        
    }

    const [wasClicked, setwasClicked] = useState(false)
  
    return (
        <div>
            <div className="container">
            <div className="card mt-5" key={`${prod.id}`} style={cardWidth}>
                <div className="card-header">
                    <h3>{`${prod.title}`}</h3>
                </div>
                <div className="card-body">
                    <img src={`${prod.pictureUrl}`} alt="" />
                    <p className="mt-5">{`${prod.price}`}€</p>
                    {wasClicked ?
                            <> 
                            <ItemCount initial={0} stock={5} onAdd={handlerOnAdd} />
                            <Link to='/'> <button> Seguir comprando </button></Link> 
                            <Link to='/cart'> <button> Ir al Check-Out </button></Link> 
                            </>
                        : 
                            <ItemCount initial={0} stock={5} onAdd={handlerOnAdd} />}
                    
                </div>
                <div className="card-footer">
                    <p>{`${prod.title}`} </p>
                    <p>Medidas: 148x220mms</p>
                    <p>Papel: Couché</p>
                    <p>Acabado: Mate</p>
                    <p>SKU: {`${prod.id}`}</p>
                </div>
            </div>
        </div> 

        </div>
    )
}

export default ItemDetail
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

let cardWidth = {
    width: '18rem'
}

 const ItemDetail = ( {prod} ) => {

    const {cartList, agregarCarrito} = useContext(CartContext)

    console.log(cartList)

    const handlerOnAdd = (cantidad) => {
        console.log(cantidad)
        setwasClicked(true)
        agregarCarrito({ ...prod, cantidad: cantidad })
        
    }

    const [wasClicked, setwasClicked] = useState(false)
  
    return (
        <div>
            <div className="container">
            <div className="card w-50 mt-5" key={`${prod.id}`} style={cardWidth}>
                <div className="card-header">
                    <h3>{`${prod.title}`}</h3>
                </div>
                <div className="card-body">
                    <img src={`${prod.pictureUrl}`} alt="" />
                    <p className="mt-5">{`${prod.price}`}€</p>
                    {wasClicked ?
                            <> 
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
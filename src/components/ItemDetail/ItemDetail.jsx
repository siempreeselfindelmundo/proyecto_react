import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


 const ItemDetail = ( {prod} ) => {

    const {agregarCarrito} = useContext(CartContext)

    const handlerOnAdd = (cantidad) => {
        console.log('CANTIDAD: ', cantidad)
        setwasClicked(true)
        agregarCarrito({ ...prod, cantidad: cantidad })        
    }

    const [wasClicked, setwasClicked] = useState(false)
  
    return (
        <div>
            <div className="flex flex-col justify-center items-center py-12" key={`${prod.id}`}> 
                <img src={`${prod.pictureUrl}`} className="rounded mb-12 shadow-md" alt="" />
                <h3 className="text-2xl">{`${prod.title}`}</h3>
                <p className="text-xl">{`${prod.price}`}€</p>
                <div className="flex flex-col items-start py-4 text-gray-600">
                    <p>Medidas: 148x220mms</p>
                    <p>Papel: Couché</p>
                    <p>Acabado: Mate</p>
                    <p>SKU: {`${prod.id}`}</p>
                </div>

                {wasClicked ?
                    <> 
                        <ItemCount initial={0} stock={5} onAdd={handlerOnAdd} />
                        <div className="flex my-5">
                            <Link to='/productos'> <button className="border-2 border-black px-2 py-1 rounded hover:bg-black hover:text-white mr-2 shadow"> Seguir comprando </button></Link> 
                            <Link to='/cart'> <button className="border-2 border-black px-2 py-1 rounded bg-black text-white hover:bg-white hover:text-black ml-2 shadow"> Ir al Carrito </button></Link> 
                        </div>
                    </>
                    : 
                    <ItemCount initial={1} stock={5} onAdd={handlerOnAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail
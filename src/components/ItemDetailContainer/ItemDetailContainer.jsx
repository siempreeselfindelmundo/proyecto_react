import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getFetch from '../../services/getFetch'

const ItemDetailContainer = ({productos}) => {

    return (
        <div>
            {productos.map((prod, i)=> 
                <ItemDetail key={i} prod={prod}/>
            )}
        </div>
    )
}

export default ItemDetailContainer
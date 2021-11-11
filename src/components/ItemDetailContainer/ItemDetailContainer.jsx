import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getFetch from '../../services/getFetch'

const ItemDetailContainer = ({productos}) => {

    return (
        <div>
            
                <ItemDetail prod={productos[0]}/>
            
        </div>
    )
}

export default ItemDetailContainer
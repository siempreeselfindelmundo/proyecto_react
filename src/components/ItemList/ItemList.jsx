import React from 'react'
import getFetch from '../../services/getFetch'
import Item from '../Item/Item'

 const ItemList = ({productos}) => {
    return (
        productos.map(prod => <Item prod={prod} key={prod.id}/>)
        


        )
}

export default ItemList
import React from 'react'
import ItemCount from './ItemCount'


function ItemListContainer({ greetings }) {
    
    return (
        <div>
            <h1>Hola soy Item List Container</h1>
            <p>{greetings}</p>
            <ItemCount initial={1} stock={5} />
        </div>
    )
}

export default ItemListContainer


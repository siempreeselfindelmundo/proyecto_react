import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const getItem = new Promise((resolve, reject)=>{
    const condition = true
    if (condition){
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    } else {
        setTimeout(()=>{
            reject('404 not found')
        }, 2000)
    } 

})


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem
        .then(resolve=>setItem(resolve))
        .catch(err=>console.log(err))
        .finally(()=> console.log("loading..."))

        console.log(item)
    }, [item])

    return (
        <div>
            <ItemDetail key={prod.id} />
        </div>
    )
}

export default ItemDetailContainer
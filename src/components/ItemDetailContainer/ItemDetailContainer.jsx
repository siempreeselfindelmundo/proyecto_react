import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import getFetch from '../../services/getFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {detailId} = useParams()

    useEffect(() => {
        if (detailId) {
            getFetch
              .then((res) => {
                console.log(res)
                setProductos(res.find((prod) => prod.id == detailId));
              })
              .catch((err) => console.log(err))
              .finally(() => setLoading(false)); 
        } 

       
    }, [detailId])


    console.log(detailId)
    
    return (
      <div>
        <ItemDetail prod={productos}/>
      </div>
    );
}

export default ItemDetailContainer
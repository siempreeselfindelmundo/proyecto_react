import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {detailId} = useParams()

    useEffect(() => {
      const dbQuery = getFirestore()
      if (detailId) {  // Si el id viene definido, enseñame el detalle de dicho item
        dbQuery.collection('productos').doc(detailId).get() // Traigo un solo item especificado por su ID de Firebase
        .then(resp => setProductos( { id: resp.id, ...resp.data() } ))  // Capturar respuesta, en setItem extraigo un objeto, y guardo el id dentro del objeto. además agrego todos los otros datos
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        // eslint-disable-next-line
      }
    }, [detailId])
    
    return (
      <div className="flex flex-col items-center">
        { loading 
        ? 
        <Spinner />
        :
        <ItemDetail prod={productos}/>
        }
      </div>
    )
}

export default ItemDetailContainer
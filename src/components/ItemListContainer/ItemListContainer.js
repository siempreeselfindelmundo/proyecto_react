
import { useState, useEffect } from 'react'
import {spinner} from 'bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import getFetch from '../../services/getFetch'
import { Spinner } from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'



function ItemListContainer({ greetings }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(res => {
            setProductos(res) })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
       
    }, [])

    return (
        <div>
            <h1 >Hola soy Item List Container</h1>
            <p>{greetings}</p>
            

            
            <ItemCount initial={0} stock={5} onAdd={0} />

            {loading ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> :   <ItemList productos={productos} />}

            <ItemDetailContainer />
          
            
          
        </div>
    )
}

export default ItemListContainer


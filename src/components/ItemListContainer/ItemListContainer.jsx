import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirestore'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

function ItemListContainer({ greetings }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        const db = getFirestore()  // Conexión con base de datos de Firestore
        const dbQuery = categoryId ? db.collection('productos').where('category', '==', categoryId) : db.collection('productos')
        
        dbQuery.get() 
        .then(data => setProductos( data.docs.map( items => ( { id: items.id , ...items.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
       
    }, [categoryId])

    return (
        <div className="item-list-container">
            <h1 className="title">Postales</h1>
            <p className="p-8">{greetings}</p>
            {loading ? 
            <Spinner/>
            :   
            <ItemList productos={productos} />  
            }
        </div>
    )
}

export default ItemListContainer

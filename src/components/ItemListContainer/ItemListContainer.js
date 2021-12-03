import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirestore'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'



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
        <div>
            <h1 className="text-black text-4xl p-8">Postales</h1>
            <p className="p-8">{greetings}</p>
            {loading ? 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> 
            :   
            <ItemList productos={productos} />  
            }
        </div>
    )
}

export default ItemListContainer

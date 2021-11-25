
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from '../../services/getFirestore'



function ItemListContainer({ greetings }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    const {categoryId} = useParams()

    useEffect(() => {
        
        const dbQuery = getFirestore()  // Conexión con base de datos de Firestore

        if (categoryId){  // si categoría viene definida, renderiza esa categoria
            dbQuery.collection('productos').where('category', '==', categoryId).get() // Apunto al nombre de mi colección en Firestore, get() = traer todo 
            .then(data => setProductos( data.docs.map( items => ( { id: items.id , ...items.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        else {  // si viene undefined, renderiza todo
            dbQuery.collection('productos').get()
            .then(data => setProductos(data.docs.map(items => ({ id: items.id, ...items.data() }) )))
            .catch(err=>console.log(err))
            .finally(() => setLoading(false))
        }
        
        console.log('PRODUCTOS: ', productos);
    }, [categoryId])

    

    return (
        <div>
            <h1>Hola soy Item List Container</h1>
            <p>{greetings}</p>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :   <ItemList productos={productos} />  }
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer

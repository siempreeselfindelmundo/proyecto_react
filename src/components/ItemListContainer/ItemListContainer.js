
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import getFetch from '../../services/getFetch'
import { Spinner } from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'



function ItemListContainer({ greetings }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        if (categoryId) {
            getFetch
            .then(res => {
                setProductos(res.filter( prod => prod.category === categoryId)) })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 

        } else {
            getFetch
            .then(res => {
                setProductos(res) })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
            }

       
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

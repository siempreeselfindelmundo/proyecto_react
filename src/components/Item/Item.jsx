import React from 'react'
import {Link} from 'react-router-dom'

let cardWidth = {
    width: '18rem'
}

function Item({prod}) {


    return (
        <div className="container">
            <div className="card mt-5" key={prod.id} style={cardWidth}>
                <div className="card-header">
                    <h3>{`${prod.title}`}</h3>
                </div>
                <div className="card-body">
                    <img src={prod.pictureUrl} alt="" />
                    <p className="mt-5">{prod.price}€</p>
                </div>
                <div className="card-footer">
                    <Link to={`/details/${prod.id}`}>
                        <button className="btn btn-outline-primary btn-block">Más detalles</button>
                    </Link>
                </div>
            </div>
        </div> 

    )
}

export default Item

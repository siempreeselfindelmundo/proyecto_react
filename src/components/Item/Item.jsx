import React from 'react'

let cardWidth = {
    width: '18rem'
}

function Item({prod}) {


    return (
        <div className="container">
            <div className="card w-50 mt-5" key={prod.id} style={cardWidth}>
                <div className="card-header">
                    <h3>{`${prod.title}`}</h3>
                </div>
                <div className="card-body">
                    <img src={prod.pictureUrl} alt="" />
                    <p className="mt-5">{prod.price}€</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">Más detalles</button>
                </div>
            </div>
        </div> 

    )
}

export default Item

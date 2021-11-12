import React from 'react'


let cardWidth = {
    width: '18rem'
}

 const ItemDetail = ( {prod} ) => {

  
    return (
        <div>
            <div className="container">
            <div className="card w-50 mt-5" key={`${prod.id}`} style={cardWidth}>
                <div className="card-header">
                    <h3>{`${prod.title}`}</h3>
                </div>
                <div className="card-body">
                    <img src={`${prod.pictureUrl}`} alt="" />
                    <p className="mt-5">{`${prod.price}`}€</p>
                </div>
                <div className="card-footer">
                    <p>{`${prod.title}`} </p>
                    <p>Medidas: 148x220mms</p>
                    <p>Papel: Couché</p>
                    <p>Acabado: Mate</p>
                    <p>SKU: {`${prod.id}`}</p>
                </div>
            </div>
        </div> 

        </div>
    )
}

export default ItemDetail
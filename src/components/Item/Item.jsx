import React from 'react'

function Item({productos}) {


    return (
        <div className="card w-25 mt-5" key={productos.id}>
        <div className="card-header">
            {`${productos.title}`}
        </div>
        <div className="card-body">
            <img src={productos.pictureUrl} alt="" />
            <p>{productos.price}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-outline-primary btn-block">Más detalles</button>

        </div>


</div> 
    )
}

export default Item

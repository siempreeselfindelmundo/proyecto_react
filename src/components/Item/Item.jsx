import React from 'react'
import {Link} from 'react-router-dom'


function Item({prod}) {
    return (
        <div>
            <Link to={`/details/${prod.id}`}>
                <div className="item-container ">
                    <img src={prod.pictureUrl} className="item-img" alt=""/>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl">{prod.title}</h2>
                        <p className="text-xl mb-4">{prod.price}€</p>
                        <Link to={`/details/${prod.id}`}>
                            <button className="btn-primary">Más detalles</button>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item
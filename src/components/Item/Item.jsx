import React from 'react'
import {Link} from 'react-router-dom'


function Item({prod}) {
    return (
        <div className="border border-black">
            <Link to={`/details/${prod.id}`}>
                <div className="flex flex-col justify-center items-center py-12">
                    <img src={prod.pictureUrl} className="rounded mb-12 shadow-md" alt=""/>
                    <div>
                        <h2 className="text-2xl">{prod.title}</h2>
                        <p className="text-xl">{prod.price}€</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item
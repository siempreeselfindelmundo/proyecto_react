import React, {memo} from 'react'
import Item from '../Item/Item'

 const ItemList = memo ( ({productos}) => {
    return (
        <div className="item-list">
            {productos.map(prod => <Item prod={prod} key={prod.id}/>)}
        </div>
        )
}
)
export default ItemList
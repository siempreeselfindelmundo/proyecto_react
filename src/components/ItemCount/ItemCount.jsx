import {useState} from 'react'


const ItemCount = ({initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        count < stock ? setCount(count+1) : alert("Superaste el stock de productos :(")      
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    return (
        <div>
            <button onClick={handlerAdd}>+</button>
            <label>{count}</label>
            <button onClick={handlerRm}>-</button><br />
            <button onClick={ () => onAdd(count)}>Agregar</button>
        </div>          
    )
}


export default ItemCount

import {useState} from 'react'

 


const ItemCount = ({initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
    }

    return (
        <div>
            <button onClick={handlerAdd}>+</button>
            <label>{count}</label>
            <button onClick={handlerRm}>-</button><br />
            <button onClick={handlerOnAdd}>Agregar</button>
        </div>          
    )
}


export default ItemCount

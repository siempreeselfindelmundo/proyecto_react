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
        <div className="item-count-container">
            <div className="item-count">
                <button onClick={handlerAdd} className="item-count-add">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
                <label className="mx-5">{count}</label>
                <button onClick={handlerRm} className="item-count-rm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
            </div>
            <button onClick={ () => onAdd(count)} className="btn-primary">Agregar</button>
        </div>          
    )
}


export default ItemCount

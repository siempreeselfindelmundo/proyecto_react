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
            <div className="flex justify-center items-center my-5">
                <button onClick={handlerAdd} className=" bg-yellow-500 border-2 border-yellow-500 rounded-full hover:bg-yellow-300 hover:border-yellow-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
                <label className="mx-5">{count}</label>
                <button onClick={handlerRm} className=" bg-white border-2 border-yellow-500 rounded-full hover:bg-yellow-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
            </div>
            <button onClick={ () => onAdd(count)} className="bg-yellow-500 px-5 py-2 rounded-md hover:bg-yellow-300">Agregar</button>
        </div>          
    )
}


export default ItemCount

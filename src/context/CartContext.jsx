import React, { createContext, useState, useContext } from "react";
import { Cart } from "../components/Cart/Cart";


export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}



const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [carroVacio, setCarroVacio] = useState(true)

    const condicionCarroVacio = () => {
        setCarroVacio(false)
    }


    const agregarCarrito = (item) => {        
        const index = cartList.findIndex(i => i.id === item.id) // posición -1
        console.log('ITEM: ', item)
        console.log('INDEX ES: ', index);
        
        if (index > -1) {
            const oldQty = cartList[index].cantidad
            console.log('ANTES: ', cartList);

            cartList.splice(index, 1)
            console.log('DESPUES: ', cartList);
            setCartList([...cartList, {...item, cantidad: item.cantidad+oldQty}])
        }
        else {
            setCartList([...cartList, {...item, cantidad: item.cantidad}])
        }
    
    }

    const eliminarItem = (id) => {

        setCartList(cartList.filter((item) => item.id !== id))
        console.log("BOTON ELIMINAR: ", cartList);
        console.log("BOTON ELIMINAR, ITEM: ",);
    }

    const limpiarCarro = () => {
        setCartList([])
    }

    const cantidadItem = (prod) => {
       return cartList.reduce( (acum, prod) => acum = acum + prod.cantidad , 0 )
    }

    const sumaPrecioItems = () => {
        return cartList.reduce((acum, item) => acum = acum + item.price, 0)

    }   

    return (
       <CartContext.Provider value={{
        cartList,
        agregarCarrito,
        limpiarCarro,
        eliminarItem, 
        cantidadItem,
        sumaPrecioItems, 
        condicionCarroVacio
           }}>
           {children}
       </CartContext.Provider>
    )
        }

export default CartContextProvider
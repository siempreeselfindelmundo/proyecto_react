import React, { createContext, useState, useContext } from "react";
import { Cart } from "../components/Cart/Cart";


export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}



const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (prod, cantidad) => {

        if(prod.cantidad != 0){
        setCartList([...cartList, prod])}
        console.log('cartList: ', cartList);
        console.log('prod: ', prod);
        
        // const index = cartList.findIndex(i => i.id === item.id) // posición -1
        // console.log('ITEM: ', item)
        // console.log('INDEX ES: ', index);
        
        // if (index > -1) {
        //     const oldQty = cartList[index].cantidad
        //     console.log('ANTES: ', cartList);
        //     cartList.splice(index, 1)
        //     console.log('DESPUES: ', cartList);
        //     setCartList([...cartList, {...item, cantidad: item.cantidad+oldQty}])
        // }
        // else {
        //     setCartList([...cartList, {item: item, cantidad: item.cantidad}])
        // }
    
    }

    const eliminarItem = (prod, id) => {

        setCartList(cartList.filter((prod) => prod.id !== id))
        console.log("BOTON ELIMINAR: ", cartList);

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
        sumaPrecioItems
           }}>
           {children}
       </CartContext.Provider>
    )
        }

export default CartContextProvider
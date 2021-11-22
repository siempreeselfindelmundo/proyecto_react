import React, { createContext, useState, useContext } from "react";
import { Cart } from "../components/Cart/Cart";


export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}



const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {


        // CON CANTIDAD PERO SIN SUMAR ITEMS IGUALES
        const index = cartList.findIndex(i => i.id === item.id) // posición -1
            console.log(index)
        
            if (index > -1) {
                const oldQty = cartList[index].cantidad
                cartList.splice(index, 1)
                setCartList([...cartList, {...item, cantidad: item.cantidad+oldQty}])
            }
            else {
                setCartList([...cartList, {item: item, cantidad: item.cantidad}])
                }
            }


            // SIN CANTIDAD 
    // const agregarCarrito = (item, cantidad) => {

    //     let inCartList = cartList.find((cartItem) => cartItem.id === item.id )

    //     if (inCartList) {
    //         inCartList.cantidad += cantidad
    //         setCartList([...cartList])
    //     }
    //     else {
    //         setCartList([...cartList, {...item, cantidad}])

    //     }

    //     console.log(cantidad);

    // }


    const eliminarItem = (id) => {

        setCartList(cartList.filter((i) => i.id !== id))

    }

    const limpiarCarro = () => {
        setCartList([])
    }

    const cantidadItem = () => {
        return cartList.reduce( (acum, item) => acum = acum + item.cantidad , 0 )
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
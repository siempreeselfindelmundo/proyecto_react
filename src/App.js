import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from "react-helmet-async"
import CartContextProvider from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import Hero from './components/Hero/Hero'
import Dropdown from './components/NavBar/Dropdown'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import './App.css'



function App() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
  useEffect(() => {
      const hideMenu =()=>{
          if(window.innerWidth > 768 && isOpen){
              setIsOpen(false)
          }
      }
      window.addEventListener('resize', hideMenu)
      return () => {
          window.removeEventListener('resize', hideMenu)
      }

      
  })


  return (
    <HelmetProvider>
        <Helmet>
            <title>Postales - A.M. Florist</title>
        </Helmet>
        <CartContextProvider>
            <BrowserRouter>
                <NavBar toggle={toggle}/>
                <Dropdown isOpen={isOpen} toggle={toggle}/>
                <Routes>
                    <Route exact path='/' element={ <Hero /> }/>   
                    <Route exact path='/productos' element={ <ItemListContainer greetings="Postales es una serie de fotografías de medio formato de originales arreglos florales instalados en el paisaje urbano de Santiago de Chile." /> }/>
                    <Route exact path='/category/:categoryId' element={ <ItemListContainer greetings="Buscas algo más específico? Aquí por categorías:"/> }/>
                    <Route exact path='/details/:detailId' element={ <ItemDetailContainer /> }/> 
                    <Route exact path='/cart' element={ <Cart /> } />
                    <Route exact path='/checkout' element={ <Checkout /> } />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContextProvider>

    </HelmetProvider>
  )
}

export default App

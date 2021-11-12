import logo from './logo.svg';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [estado, setEstado] = useState(true)
    const [count, setCount] = useState(0)
    

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Routes>
                <Route exact path='/' element={<ItemListContainer greetings="Soy una prop de verdad *pinocho intensifies*" />}/>
                <Route exact path='/category/:categoryId' element={<ItemListContainer greetings="Categoría" />}/>
                <Route exact path='/details/:detailId' element={<ItemDetailContainer />}/> 
                <Route exact path='/cart' element={<Cart />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [estado, setEstado] = useState(true)
    const [count, setCount] = useState(0)
    
    const titulo= 'Soy el componente Form'


   
    console.log('App');


  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greetings="Soy una prop de verdad *pinocho intensifies*" />}>
                
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

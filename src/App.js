import logo from './logo.svg';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [estado, setEstado] = useState(true)
    const [count, setCount] = useState(0)
    
    const titulo= 'Soy el componente Form'


   
    console.log('App');


  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greetings="Soy una prop de verdad *pinocho intensifies*" />

    </div>
  );
}

export default App;

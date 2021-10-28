import logo from './logo.svg';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';


function App() {
  const [estado, setEstado] = useState(true)
    const [count, setCount] = useState(0)
    
    const titulo= 'Soy el componente Form'

    const handleCambiarEstado = ()=>{
        setEstado(!estado)
    }

    useEffect(() => {
        console.log('efecto 1')
        // return ()=>{
        //     console.log('removeenevlistene ')
        // }
    })
    
    useEffect(() => {
        console.log('llamada a api')
        console.log('addeventlistener')
        // return ()=>{
        //     console.log('removeenevlistene ')
        // }
    }, [])

    useEffect(() => {
        console.log('efecto 3 con dependencia en count')
        
        // return ()=>{
        //     console.log('removeenevlistene ')
        // }
        
    }, [count])
  
   
    console.log('App');


  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greetings="Soy una prop de verdad *pinocho intensifies*" />

        {count}
            <button onClick={()=>{setCount(count+1)}} > click </button>

            <button onClick={handleCambiarEstado}>Cambiar estado</button>

    </div>
  );
}

export default App;

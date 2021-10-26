import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greetings="Soy una prop de verdad *pinocho intensifies*" />
    </div>
  );
}

export default App;

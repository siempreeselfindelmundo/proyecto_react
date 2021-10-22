import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer />
    </div>
  );
}

export default App;

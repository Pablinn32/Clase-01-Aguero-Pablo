import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Box from './components/Box/Box';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Box/>
      <ItemListContainer texto= 'producto1' color='red'/>
      <ItemListContainer texto= 'producto2' color='yellow'/>
      <ItemListContainer texto= 'producto3' color='brown'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

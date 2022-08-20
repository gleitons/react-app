// import logo from './logo.svg';
import './App.css';
import NavMenu from './components/menuPrincipal';
import Logoo from './components/logoo';

function App() {
 
  return (
   
    <div className="App">
      
       <NavMenu />
      <header className="App-header">
     
        <Logoo className="App-logo" />
       
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

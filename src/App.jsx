// import logo from './logo.svg';
import './App.css';
import NavMenu from './components/menuPrincipal';
import Logoo from './components/logoo';

function App() {
 
  return (
   
    <div className="App">
      
       <NavMenu />
      <header className="App-header">
     
        <Logoo className="Applogo" />
       
        <p>
          Este site está sendo criado em <code>React.js</code> Breve, novidades.
        </p>
        <a
          className="App-link"
          href="https://megadehoje.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Oficial
        </a>
      </header>
    </div>
  );
}

export default App;

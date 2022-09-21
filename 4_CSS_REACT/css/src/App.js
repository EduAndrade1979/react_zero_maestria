import './App.css';
import MyComponent from './Components/MyComponent';
import {useState} from 'react'
import Title from './Components/Title';

function App() {

  const [name] = useState("Jonhe Bonham")

  const [validacao] = useState(true)

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React CSS</h1>
      {/* CSS de componente*/}
      <MyComponent />
      <p>Este é um paragrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "magenta", padding: "25px", borderTop: "4px solid magenta"}}>Este elemento foi estilizado de forma inline</p>
      {/* Inline CSS dinamico */}
      <h2 
          style={
            name === "Jonh Bonham" 
            ? { color: 'white', backgroundColor: 'black', padding: "20px" } 
            : { color: 'gold', backgroundColor: 'black', padding: "20px" }
          }
          >
          Css inline dinamico
      </h2>
      {/* Classe dinamica */}
      <h2 className={validacao ? 'red-title' : 'pattern-title' } >Este é um texto de classe dinamica</h2>
      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;

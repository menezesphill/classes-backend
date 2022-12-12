import logo from './logo.svg';
import './App.css';
import { getBitcoinPrice } from './services';
import { useState, useEffect } from 'react';

function App() {
// =========== INICIO ===========
  const [ price, setPrice ] = useState("")

  useEffect( () => {
    
    const fetchPrice = async () => {
      const data = await getBitcoinPrice();
      console.log(data)
      setPrice(data)
    }

    fetchPrice();

  }, [ price ])
// ============= FIM =============

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          O preço do bitcoin é: {price}
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

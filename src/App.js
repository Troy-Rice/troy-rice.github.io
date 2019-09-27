import React from 'react';
import logo from './logo.svg';
import PageButton from './PageButton.js';
import './App.css';
import USA from './Images/SanDiego.jpg';
import INT from './Images/HongKong.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kuribo and Goomba <code>src/App.js</code> and save to reload.
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
      <div className="HomeScreen">
        <PageButton text={"USA"} 
                    image={USA}
        />
        <PageButton text={"International"} 
                    image={INT}
        />
      </div>
    </div>
  );
}

export default App;

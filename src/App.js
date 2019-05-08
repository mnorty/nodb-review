import React from 'react';
import Pokemon from './Components/Pokemon/Pokemon';
import PokemonLogo from './Pictures/pokemon-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={PokemonLogo} alt='Pokemon Logo'/>
      <Pokemon />
    </div>
  );
}

export default App;

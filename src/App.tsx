import React, { useContext, useEffect } from 'react'
import { PokemonContext } from './context'

function App() {
  const { pokemons } = useContext(PokemonContext)
  useEffect(() => {
    console.log(pokemons, 'poke');
    
  }, [pokemons])
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

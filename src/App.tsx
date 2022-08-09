import React, { useContext, useEffect } from 'react'
import { PokemonContext } from './context'
import { Homepage } from './pages'

function App() {
  const { pokemons } = useContext(PokemonContext)
  useEffect(() => {
    console.log(pokemons, 'poke');
    
  }, [pokemons])
  return (
    <Homepage />
  );
}

export default App;

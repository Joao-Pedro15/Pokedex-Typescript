import React, { useContext, useEffect } from 'react'
import { PokemonContext } from './context'
import { Homepage } from './pages'
import { Header } from './components/Header'
function App() {
  const { pokemons } = useContext(PokemonContext)
  useEffect(() => {
    console.log(pokemons, 'poke');
    
  }, [pokemons])
  return (
    <>
    <Header />
    <Homepage />
    </>
  );
}

export default App;

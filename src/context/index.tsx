import axios from "axios";
import React, { createContext, useState, useEffect, ReactElement } from "react"
import { API } from "../services/api";

import { usePokemon } from '../services/hooks/usePokemon'
import { gettingAll } from "../utils/gettingAll";

interface ContextType {
  setName: React.Dispatch<React.SetStateAction<string>>;
  info: InfoProps | null;
  name: string;
}
export const PokemonContext = createContext<ContextType | any>(null);
interface Props {
  children: ReactElement;
}
interface InfoProps {
  name: string;
  id: string | null;
}
export function PokemonProvider({ children }: Props) {
  const [searchPokemon, setSearchPokemon] = useState('')
  const [url, setUrl] = useState('?limit=10&offSet=0')
  const { pokemonData, pokemonSuccess, pokemonLoading, fetchNextPage } = usePokemon(0, 10, searchPokemon)
  const [pokemons, setPokemons] = useState<any[] | null>(null)

  

  useEffect(() => {
    if(pokemonData!!) {
      setPokemons(gettingAll([], pokemonData))        
    }
  }, [pokemonData])

  return (
    <PokemonContext.Provider value={{ pokemonData, pokemonLoading, pokemonSuccess, setSearchPokemon, fetchNextPage, pokemons }}>
      {children}</PokemonContext.Provider>
  )
}
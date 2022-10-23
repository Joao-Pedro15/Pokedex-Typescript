import axios from "axios";
import React, { createContext, useState, useEffect, ReactElement } from "react"
import { API } from "../services/api";

import { usePokemon } from '../services/hooks/usePokemon'

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
  const { pokemonData, pokemonSuccess, pokemonLoading, fetchNextPage } = usePokemon(url)
  const [pokemons, setPokemons] = useState<any[] | null>(null)

  type ResultType = {
    url: string
    name: string
  }

  useEffect(() => {
    if(pokemonData!!) {
      let tmpArray : any[] = []
      pokemonData.pages[0].results.map(async (result:ResultType) => {
        const { data } = await axios.get(result.url)        
        tmpArray.push({name: data.name, types: data.types, image: {front: data.sprites.front_default, back: data.sprites.back_default}})
      })     
      setPokemons(tmpArray)        
    }
  }, [pokemonData])

  return (
    <PokemonContext.Provider value={{ pokemonData, pokemonLoading, pokemonSuccess, setSearchPokemon, fetchNextPage }}>
      {children}</PokemonContext.Provider>
  )
}
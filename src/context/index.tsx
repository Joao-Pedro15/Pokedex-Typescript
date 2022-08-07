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
  const { pokemonData, pokemonSuccess } = usePokemon()
  const [pokemons, setPokemons] = useState<any>([])

  useEffect(() => {
    if(pokemonSuccess) {
        const arrayPokemons : any = []
        pokemonData.results.map(async (pokemon:{name:string, url:string}) => {
            const { data }  = await API.get(pokemon.url)
            arrayPokemons.push(data)            
        } )            
        setPokemons(arrayPokemons)        
    }
}, [pokemonSuccess])




  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}</PokemonContext.Provider>
  )
}
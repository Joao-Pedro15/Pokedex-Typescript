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
  const { pokemonData, pokemonSuccess, pokemonLoading } = usePokemon(0, 10, searchPokemon)



  return (
    <PokemonContext.Provider value={{ pokemonData, pokemonLoading, pokemonSuccess, setSearchPokemon }}>
      {children}</PokemonContext.Provider>
  )
}
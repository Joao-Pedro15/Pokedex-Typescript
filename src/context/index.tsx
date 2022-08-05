import { createContext, useState, useEffect, ReactElement } from "react"
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
export function PokemonData({ children }: Props) {
  const { pokemonData, pokemonSuccess } = usePokemon(0, 20)
  const [dataPokemon, setDataPokemon] = useState<any>(null)

  useEffect(() => {
    setDataPokemon(pokemonData)
  }, [pokemonSuccess])

  return (
    <PokemonContext.Provider value={{ dataPokemon }}>
      {children}</PokemonContext.Provider>
  )
}
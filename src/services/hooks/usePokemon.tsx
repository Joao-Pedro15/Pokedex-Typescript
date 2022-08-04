import { API } from '../api'
import { useQuery } from 'react-query'

const getPokemon = async (offSet: number = 0, limit: number = 100) => {
    const { data } = await API.get(`/pokemon/?offset=${offSet}&limit=${limit}`) 
    return data
}

export const usePokemon = (offSet: number, limit: number) => {
    const { data, isError, isSuccess, isLoading } = useQuery<any>(['pokemon', offSet, limit], async () => await getPokemon(offSet, limit) )
    return {
        pokemonData: data,
        pokemonSuccess: isSuccess,
        pokemonError: isError,
        pokemonLoading: isLoading
    }
}
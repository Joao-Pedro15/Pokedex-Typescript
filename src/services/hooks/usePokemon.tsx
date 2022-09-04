import { API } from '../api'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

const getPokemon = async (offSet: number, limit: number, name: string | undefined | null) => {
    const { data } = await API.get(`/pokemon/${name}?offset=${offSet}&limit=${limit}?`) 
    return data
}

export const usePokemon = (offSet: number = 0, limit: number = 10, name: string | undefined = '') => {
    const { data, isError, isSuccess, isLoading } = useQuery<any>(['pokemon', offSet, limit, name], async () => await getPokemon(offSet, limit, name) )
        
    return {
        pokemonData: data,
        pokemonSuccess: isSuccess,
        pokemonError: isError,
        pokemonLoading: isLoading
    }
}
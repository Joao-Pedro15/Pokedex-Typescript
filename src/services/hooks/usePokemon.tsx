import { API } from '../api'
import { useQuery, useInfiniteQuery } from 'react-query'
import { useEffect, useState } from 'react'

const getPokemon = async (offSet: number, limit: number, name: string | undefined | null) => {
    const { data } = await API.get(`/pokemon/${name}?offset=${offSet*60}&limit=${limit}?`) 
    return data
}

export const usePokemon = (offSet: number = 0, limit: number = 10, name: string | undefined = '') => {

    const { data, isError, isSuccess, isLoading, fetchNextPage } = useInfiniteQuery(['pokemon', offSet, limit, name], async ({ pageParam = 0 }) => await getPokemon(pageParam, limit, name), {
        
        getNextPageParam: (lastPage, pages) => {

            if(lastPage.length < 60) return undefined
            return pages.length
        }
    })
        
    return {
        pokemonData: data,
        pokemonSuccess: isSuccess,
        pokemonError: isError,
        pokemonLoading: isLoading,
        fetchNextPage
    }
}
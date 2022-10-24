import { API } from '../api'
import { useQuery, useInfiniteQuery } from 'react-query'
import { useEffect, useState } from 'react'

const getPokemon = async (url:string) => {
    const { data } = await API.get(`/pokemon/${url}`) 
    return data
}

export const usePokemon = (url:string) => {

    const { data, isError, isSuccess, isLoading, fetchNextPage } = useInfiniteQuery(['pokemon', url], async ({ pageParam = 0 }) => await getPokemon(url), {
        
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
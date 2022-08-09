import React, { useEffect, useState, useContext } from 'react'
import { CardsContainer } from '../components/CardsContainer/index'
import { PokemonContext } from '../context'

export const Homepage = () => {
    const { pokemons } = useContext(PokemonContext)
    useEffect(() => {
    console.log(pokemons, 'poke');
  }, [pokemons])
    return(
        <CardsContainer />
    )
}
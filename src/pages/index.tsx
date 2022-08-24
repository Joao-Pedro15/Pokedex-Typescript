import React, { useEffect, useState, useContext } from 'react'
import { CardsContainer } from '../components/CardsContainer/index'
import { PokemonContext } from '../context'
import * as S from './style'

export const Homepage = () => {
    const { pokemons } = useContext(PokemonContext)
    useEffect(() => {
    console.log(pokemons, 'poke');
  }, [pokemons])
    return(
      <S.Container>
        <CardsContainer />
      </S.Container>
    )
}
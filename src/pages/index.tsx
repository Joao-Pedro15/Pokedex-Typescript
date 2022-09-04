import React, { useContext, useState } from 'react'
import * as S from './style'
import { CardsContainer } from '../components/CardsContainer/index'
import { SearchInput } from '../components/SearchInput'
import { PokemonContext } from '../context'
export const Homepage = () => {
    const { setSearchPokemon } = useContext(PokemonContext)
    return(
      <S.Container>
        <SearchInput setInputState={setSearchPokemon} />
        <CardsContainer />
      </S.Container>
    )
}
import React from 'react'
import * as S from './style'
import { CardsContainer } from '../components/CardsContainer/index'
import { SearchInput } from '../components/SearchInput'

export const Homepage = () => {
    return(
      <S.Container>
        <SearchInput />
        <CardsContainer />
      </S.Container>
    )
}
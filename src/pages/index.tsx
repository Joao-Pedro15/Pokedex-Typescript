import React, { useState } from 'react'
import * as S from './style'
import { CardsContainer } from '../components/CardsContainer/index'
import { SearchInput } from '../components/SearchInput'

export const Homepage = () => {
  const [searchInput, setSearchInput] = useState('')
    return(
      <S.Container>
        <SearchInput setInputState={setSearchInput} />
        <CardsContainer />
      </S.Container>
    )
}
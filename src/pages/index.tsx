import React, { useContext, useState } from 'react'
import * as S from './style'
import { CardsContainer } from '../components/CardsContainer/index'
export const Homepage = () => {
    return(
      <S.Container>
        <CardsContainer />
      </S.Container>
    )
}
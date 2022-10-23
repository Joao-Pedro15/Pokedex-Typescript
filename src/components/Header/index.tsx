import React from 'react'
import * as S from './style'
import Pokeball from '../../assets/pokeball.png'

export const Header : React.FC = () => {
  return(
    <S.Container>
      <div>
        <img src={Pokeball} alt="pokeball image" />
        <h1>Poke<span>Api</span></h1>
      </div>
    </S.Container>
  )
} 
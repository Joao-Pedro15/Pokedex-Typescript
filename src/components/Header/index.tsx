import React from 'react'
import * as S from './style'
import HeaderTop from '../../assets/headerTop.png'
import Pokeball from '../../assets/pokeball.png'

export const Header : React.FC = () => {
  return(
    <S.Container>
      <img src={HeaderTop} alt="OPA" />
      <div>
        <img src={Pokeball} alt="opa  " />
      </div>
    </S.Container>
  )
} 
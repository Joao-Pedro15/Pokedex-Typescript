import React, { useContext } from 'react'
import * as S from './style'
import Pokeball from '../../assets/pokeball.png'
import { PokemonContext } from '../../context/index'

export const Header : React.FC = () => {
  const { setInputState } = useContext(PokemonContext)
  return(
    <S.Container>
      <div>
        <img src={Pokeball} alt="pokeball image" />
        <h1>Poke<span>Api</span></h1>
      </div>
      <div>
        <S.Input
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputState(e.target.value)}
        debounceTimeout={600}
        placeholder='Pesquise por nome'        
        />
      </div>
    </S.Container>
  )
} 
import React, { useEffect, useContext, useState } from 'react'
import { PokemonContext } from '../../context'
import { API } from '../../services/api'
import { CardPokemon } from '../CardPokemon'
import * as S from './style'

export const CardsContainer = () => {
    const { pokemonData, pokemonLoading, pokemonSuccess } = useContext(PokemonContext)

    return (
        <S.Container>
            {pokemonLoading && (
                <h1>Carregando...</h1>
            )}
            { pokemonData && (
                <>
                    { pokemonData.results.map((pokemon:any, index:number) => (
                        <CardPokemon pokemon={pokemon} key={index} />
                    )) }
                </>
            ) }
        </S.Container>
    )
}



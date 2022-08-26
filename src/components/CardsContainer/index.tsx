import React, { useContext } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { PokemonContext } from '../../context'
import { CardPokemon } from '../CardPokemon'
import * as S from './style'

export const CardsContainer = () => {
    const { pokemonData, pokemonLoading, pokemonSuccess } = useContext(PokemonContext)

    return (
        <S.Container>
            {pokemonLoading && (
                <S.LoadingContent>
                <TailSpin
                height="80"
                width="80"
                color="red"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
                </S.LoadingContent>
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



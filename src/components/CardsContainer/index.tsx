import React, { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { PokemonContext } from '../../context'
import { CardPokemon } from '../CardPokemon'
import InfiniteScroll from '../InfiniteScroll'
import * as S from './style'

export const CardsContainer = () => {
    const { pokemonData, pokemonLoading, pokemonSuccess, fetchNextPage, pokemons } = useContext(PokemonContext)
    const [loadMore, setLoadMore] = useState(true)

    const getNewPokemons = (bool: boolean) => {
        setLoadMore(!bool)
        fetchNextPage()
    }

    return (
        <S.Container>
            {!pokemonData && (
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

            { console.log(pokemonData, 'opa opa opaopawiefjeiofjeoifjefiojs')
             }
            { pokemonData && (
                <>
                    { pokemonData.pages.map((pokemonPage:any) => (
                        <>
                        { !pokemonPage.hasOwnProperty('results') ? (
                            <CardPokemon pokemon={pokemonPage} key={1} isSearch={true} />
                        ) : (
                            <>
                                { pokemonPage.results.map((pokemon:any, index: number) => (
                                    <CardPokemon pokemon={pokemon} key={index} isSearch={false} />
                                ))  }
                            </>
                        ) }
                        
                        </>
                    )) }
                </>
            ) }
            <InfiniteScroll loadMore={getNewPokemons} />
        </S.Container>
    )
}



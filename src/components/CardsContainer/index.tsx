import React, { useEffect, useContext } from 'react'
import { PokemonContext } from '../../context'
import { CardPokemon } from '../CardPokemon'
import * as S from './style'

export const CardsContainer = () => {
    const { pokemons, pokemonLoading } = useContext(PokemonContext)
    useEffect(() => {
        console.log(pokemonLoading)
        
        console.log(pokemons, 'poke');
    }, [pokemons])
    return (
        <S.Container>
            { !pokemons && (
                <>
                    <h1>Porra se fuder</h1>
                </>
            ) }
            { pokemons.map((pokemon:any) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
            )) }
        </S.Container>
    )
}



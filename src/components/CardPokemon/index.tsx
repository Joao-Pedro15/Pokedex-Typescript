import React, { useState, useEffect } from "react";
import { API } from "../../services/api";
import * as S from './style'
import { TailSpin }  from 'react-loader-spinner'

interface IProps {
    pokemon: any
    isSearch?: boolean
}

type ICardPokemon = {   
    name: string
    sprites: {
        back_default: string
        front_default: string
    },
    types:{
        type: { name: string }
    }[]
}

export const CardPokemon =  ({ pokemon, isSearch } : IProps) => {
    const [flipped, setFlipped] = useState<boolean>(false)
    const [pokemonData, setPokemonData] = useState<ICardPokemon | null>(null)

    async function getData(){
        const { data } = await API.get(pokemon.url)
        return setPokemonData(data)
    }

    useEffect(() => {
        if(!isSearch) { getData()}
        else {setPokemonData(pokemon) }
    }, [])

    return(
        <S.Container onClick={() => setFlipped((prev) => !prev)} flipped={flipped} >
            { !pokemonData ? (
                <S.LoadingContent>
                <TailSpin
                height="80"
                width="80"
                color='red'
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
                </S.LoadingContent>
            ) : (
            <>
            <S.Card bg={pokemonData.types[0].type.name}>
                <div className="card_front">
                    <p>{pokemonData!.name}</p>
                    <img src={pokemonData.sprites.front_default} alt={`image ${pokemon.name}`} />
                </div>
                <div className="card_back">
                    <p>{pokemonData.name}</p>
                    <img src={pokemonData.sprites.back_default} alt={`image ${pokemon.name}`} />
                </div>
            </S.Card>
            </>
            )}
        </S.Container>
    )
}
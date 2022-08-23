import React, { useState, useEffect } from "react";
import { API } from "../../services/api";
import * as S from './style'

type ICardPokemon = {   
    name: string
    sprites: {
        back_default: string
        front_default: string
    }
} 

export const CardPokemon =  ({ pokemon } : any) => {
    const [flipped, setFlipped] = useState<boolean>(false)
    const [pokemonData, setPokemonData] = useState<ICardPokemon | null>(null)

    async function getData(){
        const { data } = await API.get(pokemon.url)
        return setPokemonData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <S.Container onClick={() => setFlipped((prev) => !prev)} flipped={flipped}>
            { !pokemonData ? (
                <h1>Carregando</h1>
            ) : (
            <>
            <div className="card_front">
                <p>{pokemonData!.name}</p>
                <img src={pokemonData.sprites.front_default} alt={`image ${pokemon.name}`} />
            </div>
            <div className="card_back">
                <p>{pokemonData.name}</p>
                <img src={pokemonData.sprites.back_default} alt={`image ${pokemon.name}`} />
            </div>
            </>
            )}
        </S.Container>
    )
}
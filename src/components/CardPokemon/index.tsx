import React, { useState } from "react";
import * as S from './style'

type ICardPokemon = {
    pokemon: {
        name: string
        sprites: {
            back_default: string
            front_default: string
        }
    } 
}

export const CardPokemon = ({ pokemon } : ICardPokemon) => {
    const [flipped, setFlipped] = useState<boolean>(false)
    return(
        <S.Container onClick={() => setFlipped((prev) => !prev)} flipped={flipped}>
            <div className="card_front">
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt={`image ${pokemon.name}`} />
            </div>
            <div className="card_back">
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.back_default} alt={`image ${pokemon.name}`} />
            </div>
        </S.Container>
    )
}
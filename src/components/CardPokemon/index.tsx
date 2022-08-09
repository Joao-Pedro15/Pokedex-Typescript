import React, { useState } from "react";

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
    return(
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={`image ${pokemon.name}`} />
        </div>
    )
}
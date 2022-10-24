import React, { Dispatch, SetStateAction } from "react";
import * as S from './style'

type SearchInputProps = {
    setInputState: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({ setInputState } : SearchInputProps) => {
    return(
        <S.Container>
            <S.Input
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputState(e.target.value)}
            debounceTimeout={600}
            placeholder='Pesquise por nome'
            />
            <S.Logo>
                Poké <span>API</span>
            </S.Logo>
            {/* <input type="text" placeholder="Nome do pokemon" /> */}
            {/* // UMA IDEIA É COLOCAR UMA LOGO DE POKEAPI AQUI */}
        </S.Container>
    )
}
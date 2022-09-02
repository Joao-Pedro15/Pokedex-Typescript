import React from "react";
import * as S from './style'

export const SearchInput = () => {
    return(
        <S.Container>
            <input type="text" placeholder="Nome do pokemon" />
        </S.Container>
    )
}
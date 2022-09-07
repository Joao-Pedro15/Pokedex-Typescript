import styled from "styled-components";
import { colors }  from './colors'

type IProps = {
    flipped: boolean
    bg: string | null | undefined
}

export const Container = styled.div<IProps>`
    
    width: 260px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform .8s ease-in-out;
    transform: ${({flipped}) => flipped ? 'rotateY(180deg)' : 'none'};
    color: #FFF;
    img{
        width: 100px;
    }
`

export const Card = styled.div<{bg:string}>`
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;
    
    .card_back, .card_front{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .45);
    backface-visibility: hidden;
}


.card_front{
    transform: rotateY(180deg);
    background-color: #333;
    background: ${({bg}) => bg ? colors[bg] : 'blue'};
    color: #fff;
}

.card_back{
    color: #FFF;
    background-color: #333;
    background: ${({bg}) => bg ? colors[bg] : 'blue'};
}

`

export const LoadingContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #eee;
`
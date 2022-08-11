import styled from "styled-components";

type IProps = {
    flipped: boolean
}

export const Container = styled.div<IProps>`
    
    width: 240px;
    height: 250px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform .8s ease-in-out;
    transform: ${({flipped}) => flipped ? 'rotateY(180deg)' : 'none'};
    color: #FFF;
    img{
        width: 100px;
    }


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
    color: #fff;

}

.card_back{
    color: #FFF;
    background-color: #333;

}
`
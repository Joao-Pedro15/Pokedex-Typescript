import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    place-items: center;
    gap: 30px;
    padding: 20px;
    max-height:70vh;
    position: relative;
    width: 90vw;
    margin: auto;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 10px;
`

export const LoadingContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`
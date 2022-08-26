import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
    /* background: linear-gradient(0deg, cyan, red); */
    height: auto;
    max-height:75vh;
    position: relative;
    /* background-color: #ddd; */
    width: 90vw;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    overflow-y: auto;
    overflow-x: hidden;

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
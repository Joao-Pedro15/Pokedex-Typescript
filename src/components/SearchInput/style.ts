import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Container = styled.div`
    padding: 10px;
    align-self: flex-start;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
    input {
        align-self: flex-end;
        min-width: 35%;
        padding: 8px 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        box-shadow: 3px 4px 15px rgba(0,0,0,.5);
    }
`

export const Input = styled(DebounceInput)<any>`
input {
        align-self: flex-end;
        min-width: 100%;
        padding: 8px 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        box-shadow: 3px 4px 15px rgba(0,0,0,.5);
    }
`

export const Logo = styled.div`
    font-size: 2.5rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    span {
        color: red;
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 3rem;
    }
`
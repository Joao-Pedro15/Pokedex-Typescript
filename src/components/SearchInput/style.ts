import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Container = styled.div`
    padding: 10px;
    align-self: flex-start;
    width: 40%;
    display: flex;
    flex-direction: column;
    input {
        align-self: flex-end;
        min-width: 73%;
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
        min-width: 73%;
        padding: 8px 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        box-shadow: 3px 4px 15px rgba(0,0,0,.5);
    }
`

export const Logo = styled.div`
    font-size: 2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
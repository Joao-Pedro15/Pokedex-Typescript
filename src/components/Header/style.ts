import styled from 'styled-components'
export const Container = styled.header`
  width: 100vw;
  display: flex;
  padding: 10px 100px;
  box-shadow: 6px 4px 5px #ccc;
  align-items: center;
  justify-content: space-between;
  div{
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: row;
  }
  div img {
    max-width: 3.5rem;
  }
  div h1, div span{
    font-family: cursive;
    font-size: 2rem;
  }
  div span {
    color: red;
  }
  div:last-of-type{
    width: 35%;
  }
  div input {
    width: 100%;
    padding:10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
  }
`
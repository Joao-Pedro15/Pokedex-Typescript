import styled from 'styled-components'
export const Container = styled.header`
  width: 100vw;
  display: flex;
  padding: 10px 100px;
  box-shadow: 6px 4px 5px #ccc;
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
`
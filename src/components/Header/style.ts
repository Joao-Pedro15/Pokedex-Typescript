import styled from 'styled-components'
export const Container = styled.header`
  width: 100vw;
  position: relative;
  img:nth-child(1){
    width: 100%;
    position: relative;
    top: -10px;
  }
  div {
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    display: grid;
    place-items: center;
    img {
      max-width: 80px;
    }
  }
`
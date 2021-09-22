import styled from "styled-components";

export const PokemonList = styled.div`
  flex: 4;
`;

export const NoPokemonInCart = styled.div`
  min-width: 460px;
  height: 100%;
  margin-top: 15%;
  display: flex;
  justify-content: center;
  & > p {
    height: 30px;
  }
`;

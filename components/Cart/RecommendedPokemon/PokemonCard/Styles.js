import styled from "styled-components";

export const PokemonCard = styled.div`
  display: flex;
  width: 250px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  background-color: ${(p) => p.theme.colors.gray_0};
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;

  box-sizing: border-box;

  & * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: visible !important;
  }

  &:hover img {
    transform: scale(1.15);
  }
`;

export const HeartContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 300;
`;

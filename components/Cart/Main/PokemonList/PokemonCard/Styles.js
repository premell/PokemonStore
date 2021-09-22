import styled from "styled-components";

export const CartCard = styled.div`
  padding: 15px;
  background-color: ${(p) => p.theme.colors.gray_0};
  margin: 10px;
  border-radius: 8px;
  display: flex;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const PokemonInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 20px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  gap: 8px;
  margin-left: 20px;
`;

export const HeartContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 300;
`;

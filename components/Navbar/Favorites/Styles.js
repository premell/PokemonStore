import { useRef } from "react";
import { useClickOutside } from "shared/hooks";
import styled, { css } from "styled-components";

export const BackgroundBlur = styled.div`
  pointer-events: auto;

  z-index: 900;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  overflow-y: hidden;

  visibility: ${(p) => (p.show === true ? "visible" : "visible")};
`;

const StyledContainer = styled.div`
  width: 450px;
  padding: 11px 0 11px 11px;
  max-height: calc(0.85 * 100vh);

  background-color: ${(p) => p.theme.colors.gray_0};
  box-sizing: border-box;
  min-height: 450px;
  position: relative;
  overflow: hidden;

  box-sizing: border-box;
  border-radius: 15px;

  p,
  h3,
  h2 {
    color: ${(p) => p.theme.font_color};
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 450px;

  max-height: calc(0.85 * (100vh - 30px));

  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  box-sizing: border-box;


  &: hover{
  scrollbar-color: ${(p) => p.theme.colors.gray_60} transparent; 
`;

export const PokemonCardContainer = styled.div`
  margin: 10px;
  padding-right: 11px;
  display: flex;
  background-color: ${(p) => p.theme.colors.gray_10};
  border-radius: 10px;
  align-items: center;
  height: 200px;

  position: relative;
`;

export const HeartContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
`;

export const InformationContainer = styled.div`
  width: 80px;
  margin: 20px 70px 50px 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin: 16px 0 10px 0;
  }
`;

export const Container = ({ children, setShow }) => {
  const styledContainer = useRef(null);

  useClickOutside(styledContainer, () => setShow(false));

  return (
    <StyledContainer ref={styledContainer}>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

import styled, { css } from "styled-components";

import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

import { RegularText, BoldRegularText } from "shared/components";

import { useEffect, useRef, useState } from "react";

import Portal from "components/Portal";

const OuterContainer = styled.div`
  flex: 1 1 auto;
  max-width: 1650px;
  width: calc(100vw - 250px);
  min-height: 880px;
  display: flex;
  justify-content: flex-start;
  background-color: ${(p) => p.theme.colors.gray_10};
  margin-left: 10px;
  box-sizing: border-box;
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Container = ({ children }) => {
  return (
    <OuterContainer>
      <StyledContainer>{children}</StyledContainer>
    </OuterContainer>
  );
};

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;
  margin-right: 12px;

  @media (max-width: 550px) {
    width: calc(100vw);
    justify-content: center;
  }

  & > div {
    flex: 1;
  }
`;

export const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 230px;
  max-width: 305px;
  height: 330px;
  background-color: ${(p) => p.theme.colors.gray_0};
  margin: 0px 12px 12px 0px;
  border-radius: 12px;

  @media (max-width: 550px) {
    min-width: 300px;
    width: 300px;
  }

  position: relative;
`;

export const TypeFlairBox = styled.div`
  display: flex;
`;

export const StyledPokemonMain = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: visible !important;
  &:hover img {
    transform: scale(1.15);
  }
`;

const StyledPriceFilterFlair = styled.div``;

export const PriceFilterFlair = ({ min, max }) => {
  return (
    <p>
      {`Price: ${formatAsUSDWithoutTrailingZeros(
        min
      )} - ${formatAsUSDWithoutTrailingZeros(max)}`}
    </p>
  );
};

export const NumberFilterFlair = ({ min, max, name }) => {
  return (
    <StyledPriceFilterFlair style={{ margin: 0 }}>
      <p>{`${name}: ${min} - ${max}`}</p>
    </StyledPriceFilterFlair>
  );
};

//const StyledAbilityFilterFlair = styled.div``;

export const AbilityFilterFlair = ({ ability }) => {
  return <p>{ability}</p>;
};

const StyledNoPokemonFound = styled.div`
  max-width: 1600px;
  width: calc(100vw - 300px);
  height: 800px;
  display: flex;
  justify-content: center;
  padding-top: 15%;
`;

export const NoPokemonFound = () => {
  return (
    <StyledNoPokemonFound>
      <h3 style={{ height: "50px" }}>No pokemon were found</h3>
    </StyledNoPokemonFound>
  );
};

export const ScrollToTopButton = styled.div`
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  padding: 20px;
  background-color: rgba(235, 20, 95, 0.75);

  border-radius: 50%;

  z-index: 400;
  top: 80%;
  left: 90%;

  position: sticky;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  & * {
    color: ${(p) => p.theme.specific_font_colors.light_font_color} !important;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.dark_accent_color};
  }
`;

export const HeartContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

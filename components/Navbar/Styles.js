import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

import {
  RegularText,
  BoldRegularText,
  Subheading2,
  CartButton,
  Button,
  FavoritesHeart,
} from "shared/components";
import { TypeFlairBox } from "shared/components";

import { RiDeleteBinLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

import {
  useCart,
  useCartModal,
  useClickOutside,
  useWindowSize,
} from "shared/hooks";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export const MainContainer = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 400;
  height: 76px;
  background-color: ${(p) => p.theme.colors.gray_0};
  box-sizing: border-box;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1900px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 24px;
  padding-right: 24px;
`;
//background-color: ${p => p.theme.colors.gray_0};

export const LeftSubContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledHideAnimationContainer = styled.div`
  flex: 2;
  transform-style: preserve-3d;
`;
const WhiteBox = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  height: 80px;
  width: 800px;
  position: absolute;
  top: -60px;
`;

export const HideAnimationContainer = ({ children }) => {
  return (
    <StyledHideAnimationContainer>
      <WhiteBox />
      {children}
    </StyledHideAnimationContainer>
  );
};

export const RightSubContainer = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.colors.gray_0};
  align-items: center;
  justify-content: flex-end;
  transform-style: preserve-3d;
`;

// @media (max-width: 850px) {
//   display: none;
// }
//border: ${p => `1px solid ${p.theme.colors.gray_40}`}

export const StyledCartButton = styled.div`
  position: relative;
  height: 51px;
  width: 130px;
  margin-right: 10px;

  display: flex;
  align-items: center;

  font-size: ${(p) => p.theme.font_size.regular};
  cursor: pointer;

  & * {
    padding: 3px;
  }
`;

export const ForgivingBorder = styled.div`
  transform: translateZ(-10px);
  padding: 12px;
  position: absolute;
  width: 250px;
  right: -135px;
  top: -670px;

  transition: top 0.3s ease-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  ${(p) =>
    p.showWithAnimation &&
    css`
      transition: top 0.3s ease-out;
      top: -10px;
    `};
`;

export const StyledCartModal = styled.div`
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.gray_0};
  padding-top: 40px;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.gray_40};
`;

const StyledModalPokemonCard = styled.div`
  width: 200px;
  display: flex;
  padding-left: 20px;
`;

const PokemonInformation = styled.div`
  cursor: pointer;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  & * {
    margin: 5px;
  }
`;

const IconContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
  &:hover svg {
    color: red;
  }
`;

export const ModalPokemonCard = ({
  pokemon,
  handleRouteClick,
  handleDeleteClick,
}) => {
  const { image_url, name, types, price } = pokemon;

  return (
    <StyledModalPokemonCard>
      <div style={{ cursor: "pointer" }}>
        <Image
          onClick={handleRouteClick}
          quality={100}
          width={120}
          height={120}
          src={image_url}
        />
      </div>
      <PokemonInformation onClick={handleRouteClick}>
        <h3>{name}</h3>
        <h3>{formatAsUSDWithoutTrailingZeros(price)}</h3>
      </PokemonInformation>
      <div>
        <IconContainer>
          <RiDeleteBinLine
            size={20}
            onClick={() => handleDeleteClick(pokemon)}
          />
        </IconContainer>
      </div>
    </StyledModalPokemonCard>
  );
};

export const ModalPokemonCartContainer = styled.div`
  overflow-y: scroll;
  max-height:500px;
  scrollbar-color: transparent transparent;

  &: hover{
  scrollbar-color: ${(p) => p.theme.colors.gray_60} transparent; 
  `;

const StyledModalPokemonCartFooter = styled.div`
  margin: 0 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledFooterTotal = styled.div`
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
`;
export const ModalPokemonCartFooter = ({ children, handleClick }) => {
  const { hideWithTimer, hideTemporarly, hideInstantly } = useCartModal();

  const router = useRouter();
  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <StyledModalPokemonCartFooter>
      <StyledFooterTotal>{children}</StyledFooterTotal>
      <Button
        handleClick={handleGoToCart}
        type="positive"
        innerText="Go to cart"
        width="100%"
        height="40px"
      />
    </StyledModalPokemonCartFooter>
  );
};

const StyledNoPokemon = styled.div`
  margin-top: 20px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoPokemonFoundContainer = ({ children }) => {
  return (
    <StyledNoPokemon>
      <h2>{children}</h2>
    </StyledNoPokemon>
  );
};

export const DarkmodeContainer = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;

export const MainMiniContainer = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  height: 110px;
  justify-content: center;
  align-items: center;
  z-index: 400;
  background-color: ${(p) => p.theme.colors.gray_0};

  padding: 0px 40px;
  box-sizing: border-box;
  padding-bottom: 15px;
  padding-top: 10px;

  & > div {
  }
`;

export const Title2 = styled.p`
  width: 217px;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 26px;
  font-family: ${(props) => props.theme.font_families.titles};
  color: ${(p) => p.theme.colors.accent_color} !important;
  padding-right: 20px;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`;

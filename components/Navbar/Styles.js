import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

import {
  RegularText,
  BoldRegularText,
  Subheading2,
  Button,
  FavoritesHeart,
} from "shared/components";
import { TypeFlair } from "shared/components";

import { RiDeleteBinLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

import { useCartModal, useClickOutside } from "shared/hooks";
import { useRouter } from "next/router";
import { useRef } from "react";

export const MainContainer = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 400;
  padding: 0px 24px;
  height: 76px;
  background-color: ${(p) => p.theme.colors.gray_0};
`;
export const ContentContainer = styled.div`
  padding-left: 24px;
  width: 100%;
  height: 100%;
  max-width: 1900px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
  margin-right: 20px;
`;

const SearchBarContainer = styled.div`
  width: 500px;
  height: 45px;
  margin-left: 24px;

  border-radius: 4px;
  padding: 8px 10px 8px 16px;
  box-sizing: border-box;
  border: ${(p) => `1px solid ${p.theme.colors.gray_40}`};

  background-color: ${(p) => p.theme.colors.gray_10};

  display: flex;
  align-items: center;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${(p) => p.theme.colors.gray_60};
  }
`;
//border: ${p => `1px solid ${p.theme.colors.gray_40}`}
const StyledInput = styled.input`
  background-color: ${(p) => p.theme.colors.gray_10};
  width: 100%;
  height: 100%;
  cursor: text;
  outline: none;
  border: none;
`;

export const StyledSearchBar = ({ value, handleChange }) => {
  const searchField = useRef();

  const handleClick = () => {
    searchField.current.focus();
  };
  return (
    <SearchBarContainer>
      <StyledInput
        ref={searchField}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <BiSearch size={24} onClick={handleClick} style={{ cursor: "pointer" }} />
    </SearchBarContainer>
  );
};

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

export const StyledCartModal = styled.div`
  transform: translateZ(-10px);
  position: absolute;
  border-radius: 10px;
  width: 400px;
  left: -250px;
  top: -640px;
  background-color: white;
  padding-top: 60px;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.gray_40};

  transition: top 0.3s ease-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  ${(p) =>
    p.showWithAnimation &&
    css`
      top: -10px;
    `};
`;

const StyledModalPokemonCard = styled.div`
  display: flex;
  padding-left: 20px;
`;

const PokemonInformation = styled.div`
  cursor: pointer;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TypeContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
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
          width={150}
          height={150}
          src={image_url}
        />
      </div>
      <PokemonInformation onClick={handleRouteClick}>
        <BoldRegularText>{name}</BoldRegularText>
        <TypeContainer>
          {types.map((type) => (
            <TypeFlair key={type} type={type} />
          ))}
        </TypeContainer>
        <BoldRegularText>
          {formatAsUSDWithoutTrailingZeros(price)}
        </BoldRegularText>
      </PokemonInformation>
      <div>
        <IconContainer>
          <RiDeleteBinLine
            size={23}
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
      <Subheading2>{children}</Subheading2>
    </StyledNoPokemon>
  );
};

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
  padding-top: 15%;
  overflow-y: hidden;

  visibility: ${(p) => (p.show === true ? "visible" : "visible")};
`;

const StyledFavoritesPopupContainer = styled.div`
  width: 500px;
  padding-top: 15px;
  padding-left: 11px;
  padding-bottom: 15px;

  background-color: white;
  box-sizing: border-box;
  min-height: 450px;
  max-height: 800px;
  position: relative;
  overflow: hidden;

  box-sizing: border-box;
  border-radius: 15px;
`;
//padding: 20px;

const StyledFavoritesPopupContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 450px;
  max-height: 770px;


  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  box-sizing: border-box;


  &: hover{
  scrollbar-color: ${(p) => p.theme.colors.gray_60} transparent; 
`;

export const FavoritesPopupContainer = ({ children, setShow }) => {
  const styledContainer = useRef(null);

  useClickOutside(styledContainer, () => setShow(false));

  return (
    <StyledFavoritesPopupContainer ref={styledContainer}>
      <StyledFavoritesPopupContent>{children}</StyledFavoritesPopupContent>
    </StyledFavoritesPopupContainer>
  );
};

const FavoritePokemonCardContainer = styled.div`
  margin: 10px;
  padding-right: 20px;
  display: flex;
  background-color: ${(p) => p.theme.colors.gray_10};
  border-radius: 10px;
  align-items: center;

  position: relative;
`;

const FavoriteHeartContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
`;

const InformationContainer = styled.div`
  width: 80px;
  margin: 0 70px 50px 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const FavoritePokemonCard = ({ pokemon }) => {
  const { image_url, name, price, types } = pokemon;

  const handleButtonClick = () => {};
  return (
    <div>
      <div>
        <FavoritePokemonCardContainer>
          <div style={{ cursor: "pointer" }}>
            <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
              <Image quality={100} width={200} height={200} src={image_url} />
            </Link>
          </div>
          <InformationContainer>
            <BoldRegularText>{name}</BoldRegularText>
            <TypeContainer>
              {types.map((type) => (
                <TypeFlair key={type} type={type} />
              ))}
            </TypeContainer>
          </InformationContainer>
          <Subheading2>{formatAsUSDWithoutTrailingZeros(price)}</Subheading2>
          <FavoriteHeartContainer>
            <FavoritesHeart pokemon={pokemon} />
          </FavoriteHeartContainer>
        </FavoritePokemonCardContainer>
      </div>
    </div>
  );
};

export const DarkmodeContainer = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;

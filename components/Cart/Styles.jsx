import styled from "styled-components";
import Image from "next/image";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { useCart, useCartModal, useWindowSize } from "shared/hooks";
import { useEffect, useState } from "react";
import {
  FavoritesHeart,
  Subheading1,
  Subheading2,
  BoldRegularText,
  Button,
  AddToCartButton,
} from "shared/components";
import Link from "next/link";
import {
  formatAsUSDWithoutTrailingZeros,
  removeDuplicateObjectsByName,
  removeOverlappingObjectsByName,
} from "shared/javascript";

import { MY_PERSONAL_FAVORITE_POKEMON as myPersonalFavoritePokemon } from "shared/constants";

const StyledHeader = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    margin-top: 40px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Shopping cart</h1>
    </StyledHeader>
  );
};

const PokemonInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 20px 0;
`;

export const MainContainer = styled.div`
  max-width: 1400px;
  margin-top: 10px;
  padding: 0 100px;
  display: flex;
  justify-content: center;
  min-height: 500px;
`;
const StyledCartCard = styled.div`
  padding: 15px;
  background-color: ${(p) => p.theme.colors.gray_0};
  margin: 10px;
  border-radius: 8px;
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const HeartContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 300;
`;

//RECOMMENDED SECTION

const RecommendedSection = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 470px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;

const RecommendedContainer = styled.div`
  display: flex;
  height: 370px;
  width: calc(100vw - 100px);
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 0 50px;
  overflow: hidden;
`;
const HiddenContainer = styled.div`
  transition: left 0.3s ease-out;
  position: absolute;
  display: flex;
  left: ${(p) => p.viewPosition * 270}px;
`;

const LeftArrow = styled.div`
  z-index: 300;
  position: absolute;
  top: 50%;
  left: 10px;
`;
const RightArrow = styled.div`
  z-index: 300;
  position: absolute;
  top: 50%;
  right: 10px;
`;

const StyledRecommendedCard = styled.div`
  display: flex;
  width: 250px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  background-color: ${(p) => p.theme.colors.gray_0};
  padding: 10px;
  border-radius: 10px;

  box-sizing: border-box;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  gap: 8px;
  margin-left: 20px;
`;

const PokemonCard = ({ pokemon, handleDeleteClick }) => {
  const { name, types, price, images, image_url } = pokemon;

  return (
    <StyledCartCard>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <div style={{ cursor: "pointer" }}>
          <ImageContainer>
            <Image quality={100} width={200} height={200} src={image_url} />
            <HeartContainer>
              <FavoritesHeart pokemon={pokemon} />
            </HeartContainer>
          </ImageContainer>
        </div>
      </Link>
      <PokemonInformation>
        <h3>{name}</h3>
        <StyledButtonContainer>
          <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
          <AddToCartButton width="130px" height="40px" pokemon={pokemon} />
        </StyledButtonContainer>
      </PokemonInformation>
    </StyledCartCard>
  );
};

const StyledPokemonList = styled.div`
  flex: 4;
`;

const NoPokemonInCart = styled.div`
  min-width: 460px;
  height: 100%;
  margin-top: 15%;
  display: flex;
  justify-content: center;
  & > p {
    height: 30px;
  }
`;

export const PokemonList = ({ pokemon }) => {
  const { removePokemonFromCart } = useCart();

  return (
    <>
      <StyledPokemonList>
        {pokemon.length === 0 ? (
          <NoPokemonInCart>
            <h3>No pokemon in cart</h3>
          </NoPokemonInCart>
        ) : (
          pokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              handleDeleteClick={() => removePokemonFromCart(pokemon)}
            />
          ))
        )}
      </StyledPokemonList>
    </>
  );
};

const StyledCheckout = styled.div`
  width: 330px;
  background-color: ${(p) => p.theme.colors.gray_0};
  height: 100px;
  border-radius: 8px;
  padding: 40px;
  flex: 2;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CheckoutButton = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  cursor: not-allowed;
  height: 60px;

  background-color: ${(p) => p.theme.colors.green_light};
  &:hover {
    background-color: ${(p) => p.theme.colors.green_hover};
  }
  & p {
    color: white !important;
  }
`;
export const Checkout = ({ total }) => {
  return (
    <StyledCheckout>
      <h1>Total: {formatAsUSDWithoutTrailingZeros(total)}</h1>
      <CheckoutButton>
        <h3>Continue to checkout</h3>
      </CheckoutButton>
    </StyledCheckout>
  );
};

const RecommendedPokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  return (
    <StyledRecommendedCard>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <div style={{ cursor: "pointer" }}>
          <HeartContainer>
            <FavoritesHeart pokemon={pokemon} />
          </HeartContainer>
          <Image quality={100} width={190} height={190} src={image_url} />
          <h3>{name}</h3>
          <TypeFlairBox types={types} />
        </div>
      </Link>
      <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
      <AddToCartButton
        width="80%"
        height="30px"
        pokemon={pokemon}
        activateCartDropdown={true}
      />
    </StyledRecommendedCard>
  );
};

export const SuggestedPokemon = ({ cartPokemon, favoritePokemon }) => {
  //each point represents one pokemon
  const [viewPosition, setViewPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const recommendedPokemon = [...favoritePokemon, ...myPersonalFavoritePokemon];
  const [pokemonToRight, setPokemonToRight] = useState(0);

  const filteredDuplicates = removeDuplicateObjectsByName(recommendedPokemon);
  const filteredAlreadyInCart = removeOverlappingObjectsByName(
    filteredDuplicates,
    cartPokemon
  );
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const maximumPokemonPerPage = Math.ceil(windowWidth / 270);
    setPokemonToRight(
      filteredAlreadyInCart.length - (maximumPokemonPerPage - viewPosition) + 1
    );
  }, [windowWidth, viewPosition, filteredAlreadyInCart]);
  useWindowSize(() => setWindowWidth(window.innerWidth));

  const moveRight = () => {
    if (pokemonToRight) setViewPosition((c) => c - 1);
  };
  const moveLeft = () => {
    if (viewPosition !== 0) setViewPosition((c) => c + 1);
  };
  return (
    <>
      <RecommendedSection>
        <h1>Recommended pokemon</h1>
        {viewPosition !== 0 && (
          <LeftArrow onClick={moveLeft}>
            <IoIosArrowBack size={35} />
          </LeftArrow>
        )}
        {pokemonToRight >= 1 && (
          <RightArrow onClick={moveRight}>
            <IoIosArrowForward size={35} />
          </RightArrow>
        )}
        <RecommendedContainer>
          <HiddenContainer viewPosition={viewPosition}>
            {filteredAlreadyInCart.map((pokemon) => (
              <RecommendedPokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </HiddenContainer>
        </RecommendedContainer>
      </RecommendedSection>
    </>
  );
};

import styled from "styled-components";
import Image from "next/image";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { useCart, useCartModal, useWindowSize } from "shared/hooks";
import { useEffect, useState } from "react";
import {
  TypeFlair,
  TypeContainer,
  FavoritesHeart,
  Subheading2,
  BoldRegularText,
  Button,
} from "shared/components";
import Link from "next/link";
import {
  formatAsUSDWithoutTrailingZeros,
  removeDuplicateObjectsByName,
  removeOverlappingObjectsByName,
} from "shared/javascript";

import { MY_PERSONAL_FAVORITE_POKEMON as myPersonalFavoritePokemon } from "shared/constants";

import { RiDeleteBinLine } from "react-icons/ri";
const IconContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
  &:hover svg {
    color: red;
  }
`;

const Bin = styled.div``;
const PokemonInformation = styled.div``;

const StyledPokemonCard = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const HeartContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 300;
`;

const StyledRecommended = styled.div`
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
`;

const RecommendedContainer = styled.div`
  display: flex;
  height: 370px;
  width: calc(100vw - 100px);
  box-sizing: border-box;
  position: relative;
  padding: 0 50px;
  overflow: hidden;
`;
const HiddenContainer = styled.div`
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

const RecommendedSection = styled.div`
  width: 100%;
  height: 370px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const RecommendedPokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  const { showWithTimer } = useCartModal();
  const { getCurrentCart, addPokemonToCart, removePokemonFromCart } = useCart();

  const findPokemon = getCurrentCart().filter(
    (arrayPokemon) => arrayPokemon.name === pokemon.name
  );
  const pokemonExistsInCart = findPokemon.length !== 0;

  const handleButtonClick = () => {
    if (pokemonExistsInCart) removePokemonFromCart(pokemon);
    else addPokemonToCart(pokemon);

    showWithTimer();
  };

  return (
    <StyledRecommended>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <>
          <HeartContainer>
            <FavoritesHeart pokemon={pokemon} />
          </HeartContainer>
          <Image quality={100} width={150} height={150} src={image_url} />
          <BoldRegularText>{name}</BoldRegularText>
          <TypeContainer>
            {types.map((type) => (
              <TypeFlair key={type} type={type} />
            ))}
          </TypeContainer>
        </>
      </Link>
      <Subheading2>{formatAsUSDWithoutTrailingZeros(price)}</Subheading2>
      <Button
        handleClick={handleButtonClick}
        type={`${pokemonExistsInCart ? "negative" : "positive"}`}
        innerText={`${
          !pokemonExistsInCart ? "Add to cart" : "Remove from cart"
        }`}
        width="80%"
        height="30px"
      />
    </StyledRecommended>
  );
};

const PokemonCard = ({ pokemon, handleDeleteClick }) => {
  const { name, types, price, images, image_url } = pokemon;

  return (
    <StyledPokemonCard>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <>
          <ImageContainer>
            <Image quality={100} width={200} height={200} src={image_url} />
            <HeartContainer>
              <FavoritesHeart pokemon={pokemon} />
            </HeartContainer>
          </ImageContainer>
          <PokemonInformation>
            <BoldRegularText>{name}</BoldRegularText>
            <TypeContainer>
              {types.map((type) => (
                <TypeFlair key={type} type={type} />
              ))}
            </TypeContainer>
          </PokemonInformation>
        </>
      </Link>
      <Bin>
        <Subheading2>{formatAsUSDWithoutTrailingZeros(price)}</Subheading2>
        <IconContainer>
          <RiDeleteBinLine
            size={20}
            onClick={() => handleDeleteClick(pokemon)}
          />
        </IconContainer>
      </Bin>
    </StyledPokemonCard>
  );
};

export const PokemonList = ({ pokemon }) => {
  const { removePokemonFromCart } = useCart();
  console.log(pokemon);

  return (
    <>
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          handleDeleteClick={() => removePokemonFromCart(pokemon)}
        />
      ))}
    </>
  );
};

export const Checkout = ({ total }) => {
  return <div>{total}</div>;
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
      filteredAlreadyInCart.length - (maximumPokemonPerPage - viewPosition)
    );
    console.log(
      filteredAlreadyInCart.length - (maximumPokemonPerPage - viewPosition)
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
    <RecommendedSection>
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
  );
};

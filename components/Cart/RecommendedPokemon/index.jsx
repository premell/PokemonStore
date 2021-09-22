import { useEffect, useState } from "react";
import {
  removeDuplicateObjectsByName,
  removeOverlappingObjectsByName,
} from "shared/javascript";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import * as S from "./Styles";

import { MY_PERSONAL_FAVORITE_POKEMON as myPersonalFavoritePokemon } from "shared/constants";
import { useWindowSize } from "shared/hooks";
import PokemonCard from "./PokemonCard";

const RecommendedPokemon = ({ cartPokemon, favoritePokemon }) => {
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
      <S.RecommendedSection>
        <h1>Recommended pokemon</h1>
        {viewPosition !== 0 && (
          <S.LeftArrow onClick={moveLeft}>
            <IoIosArrowBack size={35} />
          </S.LeftArrow>
        )}
        {pokemonToRight >= 1 && (
          <S.RightArrow onClick={moveRight}>
            <IoIosArrowForward size={35} />
          </S.RightArrow>
        )}
        <S.RecommendedContainer>
          <S.HiddenContainer viewPosition={viewPosition}>
            {filteredAlreadyInCart.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </S.HiddenContainer>
        </S.RecommendedContainer>
      </S.RecommendedSection>
    </>
  );
};

export default RecommendedPokemon;

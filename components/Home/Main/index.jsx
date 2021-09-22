import * as S from "./Styles.js";

import PokemonList from "./PokemonList";
import FilterPanel from "./FilterPanel";
import ViewPanel from "./ViewPanel";
import { Seperator, IconThemeProvider } from "shared/components";

import { useRecoilState } from "recoil";
import { anyFilterActive as anyFilterActiveAtoms } from "atoms.js";
import { numberOfMatchedPokemon as numberOfMatchedPokemonAtoms } from "atoms.js";
import { useScrollPosition } from "shared/hooks";
import { useEffect, useRef, useState } from "react";

import Portal from "components/Portal";
import { AiOutlineArrowUp } from "react-icons/ai";

const Main = ({ allPokemon }) => {
  const [anyFilterActive, setAnyFilterActive] =
    useRecoilState(anyFilterActiveAtoms);
  const [numberOfMatchedPokemon, setNumberOfMatchedPokemon] = useRecoilState(
    numberOfMatchedPokemonAtoms
  );
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useScrollPosition(handleScroll);

  const handleScrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Container>
      {scrollPosition >= 400 ? (
        <S.ScrollToTopButton onClick={handleScrollClick}>
          <IconThemeProvider>
            <AiOutlineArrowUp size={25} />
          </IconThemeProvider>
        </S.ScrollToTopButton>
      ) : null}
      <ViewPanel />
      {anyFilterActive ? (
        <>
          <Seperator />
          <FilterPanel />
        </>
      ) : null}
      <S.PokemonContainer>
        <PokemonList allPokemon={allPokemon} />
      </S.PokemonContainer>
    </S.Container>
  );
};

export default Main;

import {
  Container,
  PokemonContainer,
  ScrollToTopButton,
  Divider,
} from "./Styles.js";

import PokemonList from "./PokemonList";
import FilterPanel from "./FilterPanel";
import PageNavigator from "./PageNavigator";
import ViewPanel from "./ViewPanel";
import { Seperator, IconThemeProvider } from "shared/components";

import { useRecoilState } from "recoil";
import { anyFilterActive as anyFilterActiveAtoms } from "atoms.js";
import { numberOfMatchedPokemon as numberOfMatchedPokemonAtoms } from "atoms.js";
import { useScrollPosition } from "shared/hooks";
import { useEffect, useRef, useState } from "react";

import Portal from "components/Portal";
import { AiOutlineArrowUp } from "react-icons/ai";

const MainContainer = ({ allPokemon }) => {
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
    <Container>
      {scrollPosition >= 400 ? (
        <ScrollToTopButton marginB={100} onClick={handleScrollClick}>
          <IconThemeProvider>
            <AiOutlineArrowUp size={20} />
          </IconThemeProvider>
        </ScrollToTopButton>
      ) : null}
      <ViewPanel />
      {anyFilterActive ? (
        <>
          <Seperator />
          <FilterPanel />
        </>
      ) : null}
      <PokemonContainer>
        <PokemonList allPokemon={allPokemon} />
      </PokemonContainer>
      <PageNavigator />
    </Container>
  );
};

export default MainContainer;

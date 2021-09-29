import { anyFilterActive as anyFilterActiveAtoms, numberOfMatchedPokemon as numberOfMatchedPokemonAtoms } from "atoms.js";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { IconThemeProvider, Seperator } from "shared/components";
import { useScrollPosition } from "shared/hooks";
import FilterPanel from "./FilterPanel";
import PokemonList from "./PokemonList";
import * as S from "./Styles.js";
import ViewPanel from "./ViewPanel";




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

import { useRecoilState } from "recoil";
import { pokemonPerPage as pokemonPerPageAtoms } from "atoms.js";
import { currentPage as currentPageAtoms } from "atoms.js";
import { numberOfMatchedPokemon as numberOfMatchedPokemonAtoms } from "atoms.js";

import {
  PageNavigatorContainer,
  PrevPageArrow,
  NextPageArrow,
  PageNumber,
} from "./Styles";
import { useEffect } from "react";

const getPagesToShow = (
  currentPage,
  pokemonPerPage,
  numberOfMatchedPokemon,
  maxPages
) => {
  let pages = [];
  if (currentPage <= 6) {
    for (let i = 1; i <= Math.min(10, maxPages); i++) {
      pages.push(i);
    }
  } else {
    for (
      let i = currentPage - 4;
      i <= Math.min(maxPages, currentPage + 4);
      i++
    ) {
      pages.push(i);
    }
  }
  return pages;
};

const PageNavigator = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtoms);
  const [pokemonPerPage, setPokemonPerPage] =
    useRecoilState(pokemonPerPageAtoms);
  const [numberOfMatchedPokemon, setNumberOfMatchedPokemon] = useRecoilState(
    numberOfMatchedPokemonAtoms
  );

  const maxPages = Math.ceil(numberOfMatchedPokemon / pokemonPerPage);
  const nextPageExists =
    Math.ceil(numberOfMatchedPokemon / pokemonPerPage) > currentPage;

  const pagesToShow = getPagesToShow(
    currentPage,
    pokemonPerPage,
    numberOfMatchedPokemon,
    maxPages
  );

  const goToPage = (newPage) => {
    
    if (newPage <= 0 && newPage > maxPages) setCurrentPage(1);
    else setCurrentPage(newPage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <PageNavigatorContainer>
      {currentPage !== 1 && (
        <PrevPageArrow handleClick={() => goToPage(currentPage - 1)} />
      )}
      {pagesToShow.map((page, index) => (
        <PageNumber
          key={index}
          onClick={() => goToPage(page)}
          isActive={page === currentPage}
        >
          {page}
        </PageNumber>
      ))}
      {nextPageExists && (
        <NextPageArrow handleClick={() => goToPage(currentPage + 1)} />
      )}
    </PageNavigatorContainer>
  );
};

export default PageNavigator;

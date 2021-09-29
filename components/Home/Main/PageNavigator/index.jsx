import { currentPage as currentPageAtoms, numberOfMatchedPokemon as numberOfMatchedPokemonAtoms, pokemonPerPage as pokemonPerPageAtoms } from "atoms.js";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  NextPageArrow, PageNavigatorContainer, PageNumber, PrevPageArrow
} from "./Styles";



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
          <h3>{page}</h3>
        </PageNumber>
      ))}
      {nextPageExists && (
        <NextPageArrow handleClick={() => goToPage(currentPage + 1)} />
      )}
    </PageNavigatorContainer>
  );
};

export default PageNavigator;

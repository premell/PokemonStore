import { abilityFilter as abilityFilterAtoms, currentPage as currentPageAtoms, numberOfMatchedPokemon as numberOfMatchedPokemonAtoms, pokemonPerPage as pokemonPerPageAtoms, priceFilter as priceFilterAtoms, searchQuery as searchQueryAtoms, sortingMethod as sortingMethodAtoms, statsFilter as statsFilterAtoms, typeFilter as typeFilterAtoms } from "atoms.js";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { NoPokemonFound } from "../Styles";
import {
  getAbilityFilteredPokemon, getPokemonToDisplay, getPriceFilteredPokemon, getSearchFilteredPokemon, getSortedPokemon, getStatFilteredPokemon, getTypeFilteredPokemon
} from "./helperFunctions";
import PokemonCard from "./PokemonCard";






let pokemonToDisplay = [];
const PokemonList = ({ allPokemon }) => {
  const [typeFilter, setTypeFilter] = useRecoilState(typeFilterAtoms);
  const [abilityFilter, setAbilityFilter] = useRecoilState(abilityFilterAtoms);
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterAtoms);
  const [statsFilter, setStatsFilter] = useRecoilState(statsFilterAtoms);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtoms);
  const [sortingMethod, setSortingMethod] = useRecoilState(sortingMethodAtoms);
  const [numberOfMatchedPokemon, setNumberOfMatchedPokemon] = useRecoilState(
    numberOfMatchedPokemonAtoms
  );

  const firstRun = useRef(true);

  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);

  const [pokemonPerPage, setPokemonPerPage] =
    useRecoilState(pokemonPerPageAtoms);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtoms);

  const typeFilteredPokemon = useMemo(
    () => getTypeFilteredPokemon(allPokemon, typeFilter.types),
    [allPokemon, typeFilter.types]
  );
  const abilityFilteredPokemon = useMemo(
    () =>
      getAbilityFilteredPokemon(typeFilteredPokemon, abilityFilter.abilities),
    [typeFilteredPokemon, abilityFilter.abilities]
  );
  const priceFilteredPokemon = useMemo(
    () =>
      getPriceFilteredPokemon(
        abilityFilteredPokemon,
        priceFilter.currentRange,
        priceFilter.isFiltering
      ),
    [abilityFilteredPokemon, priceFilter.currentRange, priceFilter.isFiltering]
  );
  const statFilteredPokemon = useMemo(
    () => getStatFilteredPokemon(priceFilteredPokemon, statsFilter),
    [priceFilteredPokemon, statsFilter]
  );
  const searchFilteredPokemon = useMemo(
    () => getSearchFilteredPokemon(statFilteredPokemon, searchQuery),
    [statFilteredPokemon, searchQuery]
  );

  useEffect(() => {
    const localSortedPokemon = getSortedPokemon(
      searchFilteredPokemon,
      sortingMethod
    );

    setNumberOfMatchedPokemon(localSortedPokemon.length);
    setPokemonToDisplay(
      getPokemonToDisplay(localSortedPokemon, pokemonPerPage, currentPage)
    );
  }, [searchFilteredPokemon, sortingMethod, currentPage, pokemonPerPage]);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [numberOfMatchedPokemon, sortingMethod, pokemonPerPage]);

  if (pokemonToDisplay.length === 0) {
    return <NoPokemonFound />;
  } else
    return (
      <>
        {pokemonToDisplay.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </>
    );
};

export default React.memo(PokemonList);

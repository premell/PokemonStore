import PokemonCard from "./PokemonCard";

import { NoPokemonFound } from "../Styles";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";

import { getAllPokemons } from "@/shared/javascript";

import { useRecoilState } from "recoil";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { abilityFilter as abilityFilterAtoms } from "atoms.js";
import { priceFilter as priceFilterAtoms } from "atoms.js";
import { statsFilter as statsFilterAtoms } from "atoms.js";
import { searchQuery as searchQueryAtoms } from "atoms.js";
import { sortingMethod as sortingMethodAtoms } from "atoms.js";
import { numberOfMatchedPokemon as numberOfMatchedPokemonAtoms } from "atoms.js";
//import { sortedPokemon as sortedPokemonAtoms } from "atoms.js";

import { pokemonPerPage as pokemonPerPageAtoms } from "atoms.js";
import { currentPage as currentPageAtoms } from "atoms.js";

import {
  getTypeFilteredPokemon,
  getAbilityFilteredPokemon,
  getPriceFilteredPokemon,
  getStatFilteredPokemon,
  getSearchFilteredPokemon,
  getPokemonToDisplay,
  getSortedPokemon,
} from "./helperFunctions";

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

export default PokemonList;

import { SORTING_METHODS } from "@/shared/constants";

export const getTypeFilteredPokemon = (pokemonToFilter, typeFilter) => {
  const filteredPokemon = pokemonToFilter.filter((pokemon) => {
    let hasFilteredTypes = true;
    typeFilter.forEach((filter) => {
      if (!pokemon.types.includes(filter)) hasFilteredTypes = false;
    });
    return hasFilteredTypes;
  });
  return filteredPokemon;
};

export const getAbilityFilteredPokemon = (pokemonToFilter, abilityFilter) => {
  const filteredPokemon = pokemonToFilter.filter((pokemon) => {
    let hasFilteredAbilities = true;
    abilityFilter.forEach((filter) => {
      if (!pokemon.abilities.includes(filter)) hasFilteredAbilities = false;
    });
    return hasFilteredAbilities;
  });
  return filteredPokemon;
};

export const getPriceFilteredPokemon = (
  pokemonToFilter,
  priceRange,
  isFiltering
) => {
  if (!isFiltering) return [...pokemonToFilter];
  const filteredPokemon = pokemonToFilter.filter((pokemon) => {
    if (pokemon.price >= priceRange.min && pokemon.price <= priceRange.max)
      return true;
    else return false;
  });
  return filteredPokemon;
};

export const getStatFilteredPokemon = (pokemonToFilter, statsFilter) => {
  let filteredPokemon = [...pokemonToFilter];

  Object.keys(statsFilter).forEach((key) => {
    const filter = statsFilter[key];
    if (!filter.isFiltering) return;

    filteredPokemon = filteredPokemon.filter((pokemon) => {
      const pokemonStat = pokemon.stats.find(
        (stat) => Object.keys(stat)[0] === filter.name
      );
      const pokemonStatValue = Object.values(pokemonStat)[0];

      if (
        pokemonStatValue >= filter.currentRange.min &&
        pokemonStatValue <= filter.currentRange.max
      )
        return true;
      else return false;
    });
  });
  return filteredPokemon;
};

export const getSearchFilteredPokemon = (pokemonToFilter, searchQuery) => {
  if (searchQuery === "") return [...pokemonToFilter];
  const filteredPokemon = pokemonToFilter.filter((pokemon) => {
    if (pokemon.name.includes(searchQuery.toLowerCase())) return true;
    else return false;
  });
  return [...filteredPokemon];
};

export const getSortedPokemon = (searchFilteredPokemon, sortingMethod) => {
  const sortedPokemon = [...searchFilteredPokemon];

  switch (sortingMethod) {
    case SORTING_METHODS.ALPHABETICALLY_A_FIRST:
      sortedPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case SORTING_METHODS.ALPHABETICALLY_Z_FIRST:
      sortedPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case SORTING_METHODS.PRICE_HIGHEST_FIRST:
      sortedPokemon.sort((a, b) => (a.price < b.price ? 1 : -1));
      break;
    case SORTING_METHODS.PRICE_LOWEST_FIRST:
      sortedPokemon.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case SORTING_METHODS.RELEASE_NEWEST_FIRST:
      sortedPokemon.sort((a, b) => (a.index < b.index ? 1 : -1));
      break;
    case SORTING_METHODS.RELEASE_OLDEST_FIRST:
      sortedPokemon.sort((a, b) => (a.index > b.index ? 1 : -1));
      break;
    default:
  }
  return sortedPokemon;
};

export const getPokemonToDisplay = (
  sortedPokemon,
  pokemonPerPage,
  currentPage
) => {
  const startPokemon = (currentPage - 1) * pokemonPerPage;
  const endPokemon = currentPage * pokemonPerPage;
  const pokemonToDisplay = [...sortedPokemon].slice(startPokemon, endPokemon);
  return pokemonToDisplay;
};

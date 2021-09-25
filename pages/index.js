import { fetchData, getPokemonPricing } from "shared/javascript";
import { BASE_URL, POKEMON_TO_EXCLUDE } from "shared/constants";
import { useEffect } from "react";

import Home from "components/Home";

const home = ({ pokemonObjects }) => {
  return <Home allPokemon={pokemonObjects} />;
};

export default home;

export async function getStaticProps() {
  const defaultPokemonRefs = await fetchData(
    BASE_URL + "pokemon?offset=0&limit=40"
  );
  const filteredPokemonRefs = defaultPokemonRefs.results.filter(
    (pokemonRef) => !POKEMON_TO_EXCLUDE.includes(pokemonRef.name)
  );
  const defaultPokemonObjects = await Promise.all(
    filteredPokemonRefs.map(async (pokemon) => {
      const data = await fetchData(pokemon.url);
      return data;
    })
  );
  const pokemonObjects = defaultPokemonObjects.map((pokemon) => {
    const types = pokemon.types.map((type) => type.type.name);
    const abilities = pokemon.abilities.map((ability) => ability.ability.name);

    const stats = pokemon.stats.map((stat) => ({
      [stat.stat.name]: stat.base_stat,
    }));

    return {
      name: pokemon.name,
      price: getPokemonPricing(pokemon.name),
      types,
      abilities,
      stats,
      index: pokemon.id,
      image_url: pokemon.sprites.front_default,
    };
  });

  return {
    props: { pokemonObjects },
  };
}

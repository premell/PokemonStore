import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import PokemonPage from "components/PokemonPage";

import { fetchData, getPokemonPricing } from "shared/javascript";
import { BASE_URL, POKEMON_TO_EXCLUDE } from "shared/constants";

const pokemon = ({ pokemon }) => {
  return <PokemonPage pokemon={pokemon} />;
};

export const getStaticPaths = async () => {
  const defaultPokemonRefs = await fetchData(
    BASE_URL + "pokemon?offset=0&limit=950"
  );
  console.log(defaultPokemonRefs);

  //The totem pokemon have no images available on the api
  //If it was a bigger problem I would do it programmatically intead of manually
  const filteredPokemonRefs = defaultPokemonRefs.results.filter(
    (pokemonRef) => !POKEMON_TO_EXCLUDE.includes(pokemonRef.name)
  );

  return {
    paths:
      filteredPokemonRefs?.map((pokemonRef) => ({
        params: {
          pokemonName: pokemonRef.name,
        },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pokemonObject = await fetchData(
    `${BASE_URL}pokemon/${params.pokemonName}`
  );
  const types = pokemonObject.types.map((type) => type.type.name);
  const abilities = pokemonObject.abilities.map(
    (ability) => ability.ability.name
  );
  const stats = pokemonObject.stats.map((stat) => ({
    [stat.stat.name]: stat.base_stat,
  }));

  //const front_default = pokemonObject.sprites.front_default ??

  return {
    props: {
      pokemon: {
        name: pokemonObject.name,
        price: getPokemonPricing(pokemonObject.name),
        types,
        abilities,
        stats,
        index: pokemonObject.id,
        image_urls: [
          pokemonObject.sprites?.front_default,
          pokemonObject.sprites?.back_default,
          pokemonObject.sprites?.front_shiny,
          pokemonObject.sprites?.back_shiny,
        ],
        image_url: pokemonObject.sprites?.front_default,
      },
    },
  };
};

export default pokemon;

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import PokemonPageContainer from "components/PokemonPageContainer";

import { fetchData, getPokemonPricing } from "@/shared/javascript";
import { BASE_URL } from "@/shared/constants";

const pokemon = ({ pokemon }) => {
  return <PokemonPageContainer pokemon={pokemon} />;
};

export const getStaticPaths = async () => {
  const defaultPokemonRefs = await fetchData(
    BASE_URL + "pokemon?offset=0&limit=2000"
  );

  return {
    paths:
      defaultPokemonRefs?.results?.map((pokemon) => ({
        params: {
          pokemonName: pokemon.name,
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
          pokemonObject.sprites.front_default,
          pokemonObject.sprites.back_default,
          pokemonObject.sprites.front_shiny,
          pokemonObject.sprites.back_shiny,
        ],
      },
    },
  };
};

export default pokemon;

import styled from "styled-components";

import SideFilterPanel from "components/SideFilterPanel";
import MainPokemonContainer from "components/MainPokemonContainer";

import { fetchData, getPokemonPricing } from "@/shared/javascript";
import { BASE_URL, POKEMON_TO_EXCLUDE } from "@/shared/constants";
import { useEffect } from "react";

const Divider = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  height: 30px;
  width: 100vw;
  z-index: 300;

  position: absolute;
  left: 0;
`;

const HiddenDivider = styled.div`
  height: 30px;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(p) => p.theme.colors.gray_10};
  padding-bottom: 50px;

  box-sizing: border-box;
`;

//overflow: hidden;
let pokemonObjects;
const Home = ({ pokemonObjects }) => {
  return (
    <>
      <Divider />
      <HiddenDivider />
      <AppContainer>
        <SideFilterPanel />
        <MainPokemonContainer allPokemon={pokemonObjects} />
      </AppContainer>
    </>
  );
};

//<Divider />

export default Home;

export async function getServerSideProps() {
  const defaultPokemonRefs = await fetchData(
    BASE_URL + "pokemon?offset=0&limit=2000"
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
    props: { pokemonObjects }, // will be passed to the page component as props
  };
}

// const Home = ({ pokemonObjects }) => {
//
//   return (
//     <AppContainer>
//       <SideFilterPanel />
//       <MainPokemonContainer allPokemon={pokemonObjects} />
//     </AppContainer>
//   )
// }
//
// export const getStaticProps = async () => {
//   const defaultPokemonRefs = await fetchData(BASE_URL + "pokemon?offset=0&limit=100")
//   const defaultPokemonObjects = await Promise.all(defaultPokemonRefs.results.map(async (pokemon) => {
//     const data = await fetchData(pokemon.url)
//     return data
//   }
//   ))
//   const pokemonObjects = defaultPokemonObjects.map((pokemon) => {
//     const types = pokemon.types.map((type) => type.type.name)
//     const abilities = pokemon.abilities.map((ability) => ability.ability.name)
//
//     return {
//       name: pokemon.name,
//       price: getPokemonPricing(pokemon.name),
//       types,
//       abilities,
//       image_url: pokemon.sprites.front_default,
//     }
//   })
//
//   return {
//     props: { pokemonObjects }
//   }
// }
//
// export default Home

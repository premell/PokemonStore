import Checkout from "./Checkout";
import PokemonList from "./PokemonList";
import * as S from "./Styles";

const Main = ({ cartPokemon, total }) => {
  return (
    <S.Main>
      <PokemonList cartPokemon={cartPokemon} />
      <Checkout total={total} />
    </S.Main>
  );
};

export default Main;

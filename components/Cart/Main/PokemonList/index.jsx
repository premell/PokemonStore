import PokemonCard from "./PokemonCard";
import * as S from "./Styles";

const PokemonList = ({ cartPokemon }) => {
  //const { removePokemonFromCart } = useCart();
  //handleDeleteClick={() => removePokemonFromCart(cartPokemon)}

  return (
    <>
      <S.PokemonList>
        {cartPokemon.length === 0 ? (
          <S.NoPokemonInCart>
            <h3>No pokemon in cart</h3>
          </S.NoPokemonInCart>
        ) : (
          cartPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </S.PokemonList>
    </>
  );
};

export default PokemonList;

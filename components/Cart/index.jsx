import { PokemonList, Checkout, SuggestedPokemon } from "./Styles";
import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { favorites as favoritesAtoms } from "atoms.js";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartAtoms);
  const [favorites, setFavorites] = useRecoilState(favoritesAtoms);

  return (
    <>
      <PokemonList pokemon={cart.pokemon} />
      <Checkout total={cart.total} />
      <SuggestedPokemon
        cartPokemon={cart.pokemon}
        favoritePokemon={favorites.pokemon}
      />
    </>
  );
};

export default Cart;

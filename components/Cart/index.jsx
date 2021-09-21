import {
  MainContainer,
  PokemonList,
  Checkout,
  SuggestedPokemon,
  Header,
} from "./Styles";

import { Subheading1 } from "shared/components";
import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { favorites as favoritesAtoms } from "atoms.js";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartAtoms);
  const [favorites, setFavorites] = useRecoilState(favoritesAtoms);

  return (
    <>
      <Header />
      <MainContainer>
        <PokemonList pokemon={cart.pokemon} />
        <Checkout total={cart.total} />
      </MainContainer>
      <SuggestedPokemon
        cartPokemon={cart.pokemon}
        favoritePokemon={favorites.pokemon}
      />
    </>
  );
};

export default Cart;

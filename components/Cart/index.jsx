import Main from "./Main";
import RecommendedPokemon from "./RecommendedPokemon";

import * as S from "./Styles";

import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { favorites as favoritesAtoms } from "atoms.js";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartAtoms);
  const [favorites, setFavorites] = useRecoilState(favoritesAtoms);

  return (
    <>
      <S.Header />
      <Main cartPokemon={cart.pokemon} total={cart.total} />
      <RecommendedPokemon
        cartPokemon={cart.pokemon}
        favoritePokemon={favorites.pokemon}
      />
    </>
  );
};

export default Cart;

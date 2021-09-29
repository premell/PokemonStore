import { cart as cartAtoms, favorites as favoritesAtoms } from "atoms.js";
import { useRecoilState } from "recoil";
import Main from "./Main";
import RecommendedPokemon from "./RecommendedPokemon";
import * as S from "./Styles";



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

import { AiOutlineHeart } from "react-icons/ai";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import { NavButton, BoldRegularText } from "shared/components";
import { useRouter } from "next/router";
import {
  StyledCartModal,
  ModalPokemonCard,
  ModalPokemonCartContainer,
  ModalPokemonCartFooter,
  NoPokemonFoundContainer,
} from "../Styles";
import FavoritesPopup from "./FavoritesPopup";

import { useRecoilState } from "recoil";
import { showFavorites as showFavoritesAtoms } from "atoms.js";
import { useClickOutside } from "shared/hooks";
import { useRef } from "react";

const Favorites = () => {
  const router = useRouter();
  const handleGoToFavorites = () => router.push("/favorites");

  const [showFavorites, setShowFavorites] = useRecoilState(showFavoritesAtoms);

  const handleFavoritesPopup = () => {
    setShowFavorites(true);
  };

  return (
    <NavButton onClick={handleFavoritesPopup}>
      <FavoritesPopup show={showFavorites} setShow={setShowFavorites} />
      <AiOutlineHeart size={23} />
      <h3>Favorites</h3>
    </NavButton>
  );
};

export default Favorites;

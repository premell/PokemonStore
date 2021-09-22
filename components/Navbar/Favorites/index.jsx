import { AiOutlineHeart } from "react-icons/ai";
import * as S from "./Styles";
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
import Popup from "./Popup";

import { useRecoilState } from "recoil";
import { showFavorites as showFavoritesAtoms } from "atoms.js";
import { useClickOutside } from "shared/hooks";
import { useRef } from "react";

const Favorites = () => {
  const router = useRouter();
  const handleGoToFavorites = () => router.push("/favorites");

  const [showFavorites, setShowFavorites] = useRecoilState(showFavoritesAtoms);

  const ShowPopup = () => {
    setShowFavorites(true);
  };
  console.log(showFavorites);

  return (
    <NavButton onClick={ShowPopup}>
      <Popup show={showFavorites} setShow={setShowFavorites} />
      <AiOutlineHeart size={23} />
      <h3>Favorites</h3>
    </NavButton>
  );
};

export default Favorites;

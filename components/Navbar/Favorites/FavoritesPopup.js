import React, { useRef } from "react";
import Portal from "components/Portal";

import { useClickOutside } from "shared/hooks";

import {
  BackgroundBlur,
  FavoritesPopupContainer,
  FavoritePokemonCard,
} from "../Styles";
import { useRecoilState } from "recoil";
import { favorites as favoritesAtoms } from "atoms.js";

const FavoritesPopup = ({ show, setShow }) => {
  const [favorites, setFavorites] = useRecoilState(favoritesAtoms);

  return (
    <Portal>
      {show && (
        <BackgroundBlur>
          <FavoritesPopupContainer setShow={setShow}>
            {favorites.pokemon.length !== 0 ? (
              favorites.pokemon.map((pokemon) => (
                <FavoritePokemonCard pokemon={pokemon} />
              ))
            ) : (
              <p style={{ marginTop: "60px", fontSize: "18px" }}>
                Save your favorite pokemon
              </p>
            )}
          </FavoritesPopupContainer>
        </BackgroundBlur>
      )}
    </Portal>
  );
};

export default FavoritesPopup;

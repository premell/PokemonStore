import { favorites as favoritesAtoms } from "atoms.js";
import Portal from "components/Portal";
import React from "react";
import { useRecoilState } from "recoil";
import PokemonCard from "./PokemonCard";
import * as S from "./Styles";




const Popup = ({ show, setShow }) => {
  const [favorites, setFavorites] = useRecoilState(favoritesAtoms);

  return (
    <Portal>
      {show && (
        <S.BackgroundBlur>
          <S.Container setShow={setShow}>
            {favorites.pokemon.length !== 0 ? (
              favorites.pokemon.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
              ))
            ) : (
              <p style={{ marginTop: "60px", fontSize: "18px" }}>
                Save your favorite pokemon
              </p>
            )}
          </S.Container>
        </S.BackgroundBlur>
      )}
    </Portal>
  );
};

export default Popup;

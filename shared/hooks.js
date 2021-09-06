import { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import { showModalWithTimer as showModalWithTimerAtoms } from "atoms.js";
import { showModalTemporarily as showModalTemporarilyAtoms } from "atoms.js";
import { showCartModal as showCartModalAtoms } from "atoms.js";
import { showCartModalInstantly as showCartModalInstantlyAtoms } from "atoms.js";
import { cart as cartAtoms } from "atoms.js";
//import { generalModalMessage as generalModalMessageAtoms } from "atoms.js";

export const useEscapeButtonListener = (handleEscapeClick) => {
  useEffect(() => {
    const handleUserKeyPress = (e) => {
      if (e.code === "Escape") handleEscapeClick();
    };
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);
};

export const useClickOutside = (ref, handleClickOutside) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        handleClickOutside();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);
};

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartAtoms);

  const getCurrentCart = () => {
    return cart.pokemon;
  };

  const getCurrentTotal = () => {
    return cart.total;
  };

  const addPokemonToCart = (pokemon) => {
    const findPokemon = cart.pokemon.filter(
      (cartPokemon) => cartPokemon.name === pokemon.name
    );
    const pokemonAlreadyInCart = findPokemon.length !== 0;
    if (pokemonAlreadyInCart) return;
    else {
      setCart((cart) => ({
        pokemon: [...cart.pokemon, pokemon],
        total: cart.total + pokemon.price,
      }));
    }
  };

  const removePokemonFromCart = (pokemon) => {
    const updatedPokemon = cart.pokemon.filter(
      (cartPokemon) => cartPokemon.name !== pokemon.name
    );
    setCart((cart) => ({
      pokemon: updatedPokemon,
      total: cart.total - pokemon.price,
    }));
  };

  return {
    getCurrentCart,
    getCurrentTotal,
    addPokemonToCart,
    removePokemonFromCart,
  };
};

let timer;
export const useCartModal = () => {
  const [showCartModal, setShowCartModal] = useRecoilState(showCartModalAtoms);
  const [showModalWithTimer, setShowModalWithTimer] = useRecoilState(
    showModalWithTimerAtoms
  );
  const [showModalTemporarily, setShowModalTemporarily] = useRecoilState(
    showModalTemporarilyAtoms
  );
  const [showCartModalInstantly, setShowCartModalInstantly] = useRecoilState(
    showCartModalInstantlyAtoms
  );

  const showWithTimer = () => {
    setShowModalWithTimer(true);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => setShowModalWithTimer(false), 3000);
  };

  const hideWithTimer = () => {
    setShowModalWithTimer(false);
  };

  const showTemporarily = () => {
    setShowModalTemporarily(true);
  };

  const hideTemporarly = () => {
    setShowModalTemporarily(false);
  };

  const hideInstantly = () => {
    setShowCartModalInstantly(false);
  };

  useEffect(() => {
    if (showModalWithTimer || showModalTemporarily) {
      setShowCartModal(true);
      setShowCartModalInstantly(true);
    } else setShowCartModal(false);
  }, [showModalWithTimer, showModalTemporarily]);

  return {
    showWithTimer,
    hideWithTimer,
    showTemporarily,
    hideTemporarly,
    hideInstantly,
  };
};

export const useScrollPosition = (handleScroll) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

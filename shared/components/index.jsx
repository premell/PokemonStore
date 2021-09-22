import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { favorites as favoritesAtoms } from "atoms.js";
import { getTypeColor } from "shared/javascript";
import { cart as cartAtoms } from "atoms.js";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

import * as S from "./Styles";
import { useCart, useCartModal } from "shared/hooks";

export const Button = ({
  handleClick,
  type,
  innerText,
  width = "330px",
  height = "100px",
}) => {
  return (
    <S.StyledButton
      onClick={handleClick}
      width={width}
      height={height}
      type={type}
    >
      <p>{innerText}</p>
    </S.StyledButton>
  );
};

export const AddToCartButton = ({
  pokemon,
  height = "100px",
  width = "330px",
  activateCartDropdown = true,
}) => {
  const { name, types, price, image_url } = pokemon;

  const [cart, setcart] = useRecoilState(cartAtoms);
  const { addPokemonToCart, removePokemonFromCart } = useCart();
  const { showWithTimer } = useCartModal();

  const [pokemonExistsInCart, setPokemonExistsInCart] = useState(false);

  useEffect(() => {
    const findPokemon = cart.pokemon.filter(
      (cartPokemon) => cartPokemon.name === pokemon.name
    );
    const localPokemonExistsInCart = findPokemon.length !== 0;
    if (localPokemonExistsInCart) setPokemonExistsInCart(true);
    else setPokemonExistsInCart(false);
  }, [cart.pokemon]);

  const handleButtonClick = () => {
    if (pokemonExistsInCart) removePokemonFromCart(pokemon);
    else addPokemonToCart(pokemon);

    if (activateCartDropdown === true) showWithTimer();
  };

  return (
    <Button
      handleClick={handleButtonClick}
      type={`${pokemonExistsInCart ? "negative" : "positive"}`}
      innerText={`${!pokemonExistsInCart ? "Add to cart" : "Remove from cart"}`}
      width={width}
      height={height}
    />
  );
};

export const Links = ({ darkBackground = true, size = 35 }) => {
  return (
    <S.StyledLinks darkBackground={darkBackground}>
      <a target="_blank" href="https://github.com/premell">
        <AiFillGithub size={size} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/elmer-lingest%C3%A5l-3571021a8/"
      >
        <AiFillLinkedin size={size} />
      </a>
    </S.StyledLinks>
  );
};

export const FavoritesHeart = ({ pokemon, size = 25 }) => {
  const [favorites, setFavorites] = useRecoilState(favoritesAtoms);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let localIsFavorited = false;
    favorites.pokemon.forEach((favPokemon) => {
      if (favPokemon.name === pokemon.name) localIsFavorited = true;
    });
    setIsFavorited(localIsFavorited);
  }, [favorites]);

  const handleClick = (e) => {
    e.stopPropagation();
    let newPokemon = [...favorites.pokemon];
    if (isFavorited) {
      newPokemon = newPokemon.filter(
        (favPokemon) => favPokemon.name !== pokemon.name
      );
    } else newPokemon.push(pokemon);

    setFavorites({ ...favorites, pokemon: newPokemon });
  };

  return (
    <S.StyledHeartIcon
      isFavorited={isFavorited}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      {isFavorited || isHovering ? (
        <AiFillHeart size={size} />
      ) : (
        <AiOutlineHeart size={size} />
      )}
    </S.StyledHeartIcon>
  );
};

//THIS WAS THE LAST HEARTICON
// <div onClick={handleClick}>
//   {!isFavorited ? (
//     <StyledHeartIcon
//       isFavorited={isFavorited}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       hovering={isHovering}
//     >
//       {isHovering ? (
//         <AiFillHeart size={size} />
//       ) : (
//         <AiOutlineHeart size={size} />
//       )}
//     </StyledHeartIcon>
//   ) : (
//     <StyledHeartIcon
//       isFavorited={isFavorited}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <AiFillHeart size={size} />
//     </StyledHeartIcon>
//   )}
// </div>

export const TypeFlair = ({ type, width = "80px", height = "30px" }) => {
  const color = getTypeColor(type);
  return (
    <S.StyledTypeFlair width={width} height={height} color={color}>
      <p> {type}</p>
    </S.StyledTypeFlair>
  );
};

export const TypeFlairBox = ({ types, width = "80px", height = "30px" }) => {
  return (
    <S.TypeFlairBox>
      {types.map((type) => (
        <TypeFlair key={type} type={type} />
      ))}
    </S.TypeFlairBox>
  );
};

export const Checkbox = ({ checked, handleClick }) => {
  return (
    <S.CheckboxContainer onClick={() => handleClick(checked)}>
      <S.HiddenCheckbox />
      <S.StyledCheckbox checked={checked}>
        <S.CheckboxIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </S.CheckboxIcon>
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

export const NavButton = ({ width, height }) => {
  return <S.StyledHeartIcon width={width} height={height} />;
};

export const IconThemeProvider = () => <S.IconThemeProvider />;

export const Seperator = () => <S.Seperator />;

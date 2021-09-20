import styled, { css } from "styled-components";
import Image from "next/image";
import {
  FavoritesHeart,
  Subheading1,
  Subheading2,
  Button,
} from "shared/components";
import { TypeFlair } from "shared/components";
import { STATS } from "shared/constants";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import { useCart, useCartModal } from "shared/hooks";
import { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";

export const MainContainer = styled.div`
  height: calc(100vh - 376px);
  min-height: 750px;
  max-width: 1900px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MainContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & * {
    margin-right: 10px;
  }
`;
//padding-left:24px;

const StyledImageList = styled.div`
  width: 10vw;
  max-width: 155px;
  height: min(calc(100% - 80px), 42vw);
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & * {
    flex: 1;
  }
`;
const StyledImageContainer = styled.div`
  cursor: pointer;
  border-width: 1px;
  border-color: ${(p) => p.theme.colors.gray_40};
  border-style: solid;
  border-radius: 4px;
  margin-bottom: 5px;

  position: relative;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${(p) => p.theme.colors.accent_color};
  }
  border-color: ${(p) => p.selected && p.theme.colors.accent_color};
  border-width: ${(p) => p.selected && "2px"};
`;

const ImageContainer = ({ image, selected, handleClick }) => {
  return (
    <StyledImageContainer onClick={handleClick} selected={selected}>
      <Image quality={100} layout="fill" src={image} />
    </StyledImageContainer>
  );
};

export const ImageList = ({ images, selectedImage, handleNewSelected }) => {
  const anyImageAvailable = useRef(true);
  useEffect(() => {
    let allImagesNull = true;
    images.forEach((image) => {
      if (image !== null) allImagesNull = false;
    });
    if (allImagesNull) anyImageAvailable.current = false;
  }, []);

  return (
    <StyledImageList>
      {anyImageAvailable.current
        ? images.map(
            (image) =>
              image !== null && (
                <ImageContainer
                  key={image}
                  handleClick={() => handleNewSelected(image)}
                  image={image}
                  selected={image === selectedImage}
                />
              )
          )
        : null}
    </StyledImageList>
  );
};

const StyledMainImage = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  position: relative;
  width: 50vw;
  max-width: 690px;
  height: min(calc(100% - 40px), 50vw);
  border-radius: 20px;
  margin-right: 20px;
`;

const FavoritesHeartContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 40px;

  width: 50px;
  height: 50px;
`;

export const MainImage = ({ defaultImage, image, pokemon }) => {
  pokemon = { ...pokemon, image_url: defaultImage };
  return (
    <StyledMainImage>
      <Image quality={100} layout="fill" src={image} />
      <FavoritesHeartContainer>
        <FavoritesHeart pokemon={pokemon} size={42} />
      </FavoritesHeartContainer>
    </StyledMainImage>
  );
};

const StyledPokemonInformation = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  border-radius: 20px;
  padding: 15px 0px 15px 30px;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    margin-top: 30px;
  }
`;

const Ability = styled.div`
  padding: 4px 8px;
  background-color: ${(p) => p.theme.colors.gray_10};
  border-radius: 4px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getStatColor = (statName) => {
  if (statName === STATS.ATTACK) return "#f5ac78";
  else if (statName === STATS.DEFENSE) return "#fae078";
  else if (statName === STATS.SPEED) return "#fa92b2";
  else if (statName === STATS.HP) return "#ff5959";
  else if (statName === STATS.SPECIAL_ATTACK) return "#9db7f5";
  else if (statName === STATS.SPECIAL_DEFENSE) return "#a7db8d";
};

const StyledStat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  padding: 5px 20px;
  background-color: ${(p) => p.backgroundColor};
  box-sizing: border-box;
  border-radius: 8px;

  & > p {
    color: white;
  }
`;

const Stat = ({ statName, value }) => {
  const backgroundColor = getStatColor(statName);
  return (
    <StyledStat backgroundColor={backgroundColor}>
      <p>{statName}</p>
      <p>{value}</p>
    </StyledStat>
  );
};

const ItemContainer = styled.div`
  width: 330px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  & * {
    margin: 10px;
  }
`;

export const PokemonInformation = ({ pokemon }) => {
  const { name, stats, price, types, abilities, image_urls } = pokemon;

  const [cart, setCart] = useRecoilState(cartAtoms);
  const [existsInCart, setExistsInCart] = useState(false);

  const { addPokemonToCart, removePokemonFromCart } = useCart();
  const { showWithTimer } = useCartModal();

  const handleClick = () => {
    if (existsInCart) removePokemonFromCart(pokemon);
    else addPokemonToCart({ ...pokemon, image_url: image_urls[0] });

    showWithTimer();
  };

  useEffect(() => {
    let localExistsInCart = false;
    cart.pokemon.forEach((cartPokemon) => {
      if (cartPokemon.name === name) localExistsInCart = true;
    });
    setExistsInCart(localExistsInCart);
  }, [cart]);

  return (
    <StyledPokemonInformation>
      <Subheading1 style={{ fontSize: "35px", margin: "8px 0px" }}>
        {name}
      </Subheading1>
      <ItemContainer style={{ marginBottom: "20px" }}>
        {types.map((type) => (
          <TypeFlair
            key={type}
            font_size="15px"
            type={type}
            width="100px"
            height="40px"
          />
        ))}
      </ItemContainer>
      <Subheading1>Abilities</Subheading1>
      <ItemContainer>
        {abilities.map((ability) => (
          <Ability key={ability}>
            <p>{ability}</p>
          </Ability>
        ))}
      </ItemContainer>
      <Subheading1>Stats</Subheading1>
      <ItemContainer>
        {stats.map((stat) => {
          return (
            <Stat
              key={Object.keys(stat)[0]}
              statName={Object.keys(stat)[0]}
              value={Object.values(stat)[0]}
            />
          );
        })}
      </ItemContainer>
      <ItemContainer
        style={{
          marginTop: "30px",
          width: "300px",
          justifyContent: "space-between",
        }}
      >
        <Subheading1 style={{ fontSize: "28px" }}>
          {formatAsUSDWithoutTrailingZeros(price)}
        </Subheading1>
        <Button
          height="50px"
          width="180px"
          handleClick={handleClick}
          innerText={existsInCart ? "Remove from cart" : "Add to cart"}
          type={existsInCart ? "negative" : "positive"}
        />
      </ItemContainer>
    </StyledPokemonInformation>
  );
};
//   export const Button = ({ handleClick, type, innerText, height = "300px", width = "330px" }) => {
//
//   }
// <ItemContainer>
//   {stats.map((ability) => <Ability>{ability}</Ability>)}
// </ItemContainer>

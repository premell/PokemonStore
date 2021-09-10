import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

import Link from "next/link";

import { useRecoilState } from "recoil";
import { favorites as favoritesAtoms } from "atoms.js";

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  cursor: pointer;
  ${(p) => css`
    width: ${p.width};
    height: ${p.height};
    color: ${p.theme.colors.gray_0};
  `}
  background:${(p) => {
    if (p.type === "positive")
      return css`
        ${p.theme.colors.green_light}
      `;
    else if (p.type === "negative")
      return css`
        ${p.theme.colors.red_light}
      `;
  }};

  &:hover {
    background: ${(p) => {
      if (p.type === "positive")
        return css`
          ${p.theme.colors.green_hover}
        `;
      else if (p.type === "negative")
        return css`
          ${p.theme.colors.red_hover}
        `;
    }};
  }
`;

export const Button = ({
  handleClick,
  type,
  innerText,
  height = "100px",
  width = "330px",
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      height={height}
      width={width}
      type={type}
    >
      {" "}
      {innerText}
    </StyledButton>
  );
};

export const NavButton = styled.div`
  cursor: pointer;
  margin-right: 10px;
  width: 100px;
  display: flex;
  align-items: center;

  & * {
    padding: 3px;
  }
`;

export const Title2 = styled.p`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: ${(props) => props.theme.font_size.Subheading2};
  font-family: ${(props) => props.theme.font_families.titles};
  color: ${(p) => p.theme.colors.aqua_blue};
`;

export const Subheading1 = styled.p`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: ${(props) => props.theme.font_size.subheading1};
`;

export const Subheading2 = styled.p`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: ${(props) => props.theme.font_size.subheading2};
`;
export const BoldRegularText = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${(props) => props.theme.font_size.regular};
`;
export const RegularText = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: ${(props) => props.theme.font_size.regular};
`;

export const StyledNotImplemented = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  height: 30px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: not-allowed;
  &:hover {
    background-color: ${(p) => p.theme.colors.gray_60};
  }
`;

export const NotImplemented = ({ defaultText, children }) => {
  const [text, setText] = useState(defaultText);

  //e.g "unavailabe" or "not implemented", I choose to not change it
  const unavailableText = defaultText;

  const handleMouseEnter = () => setText(defaultText);
  const handleMouseLeave = () => setText(defaultText);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledNotImplemented>
        <div style={{ marginRight: "8px" }}>{children}</div>
        <BoldRegularText>{text}</BoldRegularText>
      </StyledNotImplemented>
    </div>
  );
};

export const Seperator = styled.hr`
  width: 100%;
  border-top: 1px solid ${(p) => p.theme.colors.gray_40};
  border-bottom: 1px solid ${(p) => p.theme.colors.gray_10};
  border-left: 0px;
  border-right: 0px;
`;

const StyledLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(p) => (p.backgroundColor === "black" ? "white" : "black")};

  & * {
    margin: ${(p) => p.spaceBetween};
  }

  & svg {
    cursor: pointer;
  }
`;

export const Links = ({
  backgroundColor = "black",
  size = 35,
  spaceBetween = "0px",
}) => {
  return (
    <StyledLinksContainer
      backgroundColor={backgroundColor}
      spaceBetween={spaceBetween}
    >
      <a target="_blank" href="https://github.com/premell" passHref={true}>
        <AiFillGithub size={size} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/elmer-lingest%C3%A5l-3571021a8/"
        passHref={true}
      >
        <AiFillLinkedin size={size} />
      </a>
    </StyledLinksContainer>
  );
};

const HeartIcon = styled.div`
  cursor: pointer;

  color: ${(p) => (p.isFavorited ? "red" : p.theme.colors.gray_80)};
`;

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

  const handleClick = () => {
    let newPokemon = [...favorites.pokemon];
    if (isFavorited) {
      newPokemon = newPokemon.filter(
        (favPokemon) => favPokemon.name !== pokemon.name
      );
    } else newPokemon.push(pokemon);
    setFavorites({ ...favorites, pokemon: newPokemon });
  };

  return (
    <div onClick={handleClick}>
      {!isFavorited ? (
        <HeartIcon
          isFavorited={isFavorited}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <AiFillHeart size={size} />
          ) : (
            <AiOutlineHeart size={size} />
          )}
        </HeartIcon>
      ) : (
        <HeartIcon
          isFavorited={isFavorited}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AiFillHeart size={size} />
        </HeartIcon>
      )}
    </div>
  );
};

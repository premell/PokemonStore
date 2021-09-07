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
  padding: 5px;
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  cursor: not-allowed;
  &:hover {
    background-color: ${(p) => p.theme.colors.gray_60};
  }
`;

export const NotImplemented = ({ defaultText, children }) => {
  const [text, setText] = useState(defaultText);

  const handleMouseEnter = () => setText("unavailable");
  const handleMouseLeave = () => setText(defaultText);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledNotImplemented>
        <BoldRegularText>
          <div style={{ marginRight: "8px" }}>{children}</div>
          {text}
        </BoldRegularText>
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

  color: white;

  & svg {
    cursor: pointer;
  }
  color: ${(p) => (p.background_color === "dark" ? "white" : "black")};
`;

export const Links = ({ background_color }) => {
  return (
    <StyledLinksContainer background_color="dark">
      <Link href="https://github.com/premell" passHref={true}>
        <AiFillGithub size={35} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/elmer-lingest%C3%A5l-3571021a8/"
        passHref={true}
      >
        <AiFillLinkedin size={35} />
      </Link>
    </StyledLinksContainer>
  );
};

const HeartIcon = styled.div`
  cursor: pointer;

  color: ${(p) => (p.isFavorited ? "red" : p.theme.colors.gray_80)};
`;

export const FavoritesHeart = ({ pokemon }) => {
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

  useEffect(() => {
    console.log(isHovering);
  }, [isHovering]);

  return (
    <div onClick={handleClick}>
      {!isFavorited ? (
        <HeartIcon
          isFavorited={isFavorited}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <AiFillHeart size={25} />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </HeartIcon>
      ) : (
        <HeartIcon
          isFavorited={isFavorited}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AiFillHeart size={25} />
        </HeartIcon>
      )}
    </div>
  );
};

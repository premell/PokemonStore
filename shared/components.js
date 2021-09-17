import { useState, useRef, useEffect } from "react";
import { getTypeColor } from "shared/javascript";
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

  & p {
    color: ${(p) => p.theme.specific_font_colors.light_font_color} !important;
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
      <p>{innerText}</p>
    </StyledButton>
  );
};

export const NavButton = styled.div`
  cursor: pointer;
  width: ${(p) => p.width ?? "95px"};
  display: flex;
  align-items: center;
  padding: 2px;
  padding-left: 4px;
  display: flex;
  align-items: center;
  height: 30px;
  padding-right: 5px;
  border-radius: 4px;

  &:hover {
    background-color: ${(p) => p.theme.colors.gray_20};
  }
  & * {
    padding: 3px;
  }
`;

export const Title2 = styled.p`
  width: 285px;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: ${(props) => props.theme.font_size.Subheading2};
  font-family: ${(props) => props.theme.font_families.titles};
  color: ${(p) => p.theme.colors.accent_color};
  padding-right: 20px;

  @media (max-width: 850px) {
    display: none;
  }
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
  padding-right: 20px;
  border-radius: 4px;
  cursor: not-allowed;
`;
// &:hover {
//   background-color: ${(p) => p.theme.colors.gray_60};
// }
//margin-right: 10px;

export const NotImplemented = ({ defaultText, children }) => {
  const [text, setText] = useState(defaultText);

  //e.g "unavailabe" or "not implemented", I choose to not change it
  const unavailableText = defaultText;

  const handleMouseEnter = () => setText(defaultText);
  const handleMouseLeave = () => setText(defaultText);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledNotImplemented>
        <div>{children}</div>
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

  & * {
    margin: ${(p) => p.spaceBetween};
  }

  & svg {
    cursor: pointer;
    color: ${(p) => (p.darkBackground ? "white" : "black")} !important;
  }
`;

export const Links = ({
  darkBackground = true,
  size = 35,
  spaceBetween = "0px",
}) => {
  return (
    <StyledLinksContainer
      darkBackground={darkBackground}
      spaceBetween={spaceBetween}
    >
      <a target="_blank" href="https://github.com/premell">
        <AiFillGithub size={size} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/elmer-lingest%C3%A5l-3571021a8/"
      >
        <AiFillLinkedin size={size} />
      </a>
    </StyledLinksContainer>
  );
};

const HeartIcon = styled.div`
  cursor: pointer;

  & svg {
    color: ${(p) =>
      p.isFavorited || p.hovering ? "red" : p.theme.font_color} !important;
  }
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
          hovering={isHovering}
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

export const StyledFlair = styled.div`
  ${(p) => css`
    width: ${p.width};
    height: ${p.height};
    color: ${p.theme.colors.gray_0};
    font-size: ${p.font_size ? p.font_size : p.theme.font_size.regular};
  `}
  background-color: ${(p) => p.color};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #fdfef4 !important;
  }
`;

export const TypeFlair = ({
  type,
  font_size,
  width = "80px",
  height = "30px",
}) => {
  const color = getTypeColor(type);
  return (
    <StyledFlair
      font_size={font_size}
      width={width}
      height={height}
      color={color}
    >
      <p> {type}</p>
    </StyledFlair>
  );
};

export const IconThemeProvider = styled.div`
  color: ${(p) => p.theme.font_color} !important;
`;

//Checkbox
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;

  & > input:focus div {
    box-shadow: 0 0 0 3px pink;
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props) =>
    props.checked
      ? props.theme.colors.accent_color
      : props.theme.colors.gray_0};
  border-radius: 3px;
  border: 1px solid ${(p) => p.theme.colors.gray_40};
  transition: all 150ms;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Checkbox = ({ checked, handleClick }) => {
  return (
    <CheckboxContainer onClick={() => handleClick(checked)}>
      <HiddenCheckbox />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

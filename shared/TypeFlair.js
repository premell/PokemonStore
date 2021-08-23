import styled, { css } from "styled-components"
import { TYPES } from "@/shared/constants"

export const StyledFlair = styled.div`
  ${p => css`
    width: ${p.width};
    height: ${p.height};
    color: ${p.theme.colors.gray_0};
    font-size: ${p.font_size ? p.font_size : p.theme.font_size.regular};
  `}
  background-color: ${p => p.color};
  border-radius: 10px;

  display: flex; 
  justify-content:center;
  align-items:center;
`


const getFlairColor = (type) => {
  let flairColor;
  switch (type) {
    case TYPES.NORMAL:
      flairColor = "#A8A878";
      break;
    case TYPES.FIRE:
      flairColor = "#F08030";
      break;
    case TYPES.WATER:
      flairColor = "#6890F0";
      break;
    case TYPES.GRASS:
      flairColor = "#78C850";
      break;
    case TYPES.ELECTRIC:
      flairColor = "#f8d030";
      break;
    case TYPES.ICE:
      flairColor = "#98D8D8";
      break;
    case TYPES.FIGHTING:
      flairColor = "#C03028";
      break;
    case TYPES.POISON:
      flairColor = "#A040A0";
      break;
    case TYPES.GROUND:
      flairColor = "#E0C068";
      break;
    case TYPES.FLYING:
      flairColor = "#A890F0";
      break;
    case TYPES.PSYCHIC:
      flairColor = "#F85888";
      break;
    case TYPES.BUG:
      flairColor = "#A8B820";
      break;
    case TYPES.ROCK:
      flairColor = "#B8A038";
      break;
    case TYPES.GHOST:
      flairColor = "#705898";
      break;
    case TYPES.DARK:
      flairColor = "#705848";
      break;
    case TYPES.DRAGON:
      flairColor = "#7038F8";
      break;
    case TYPES.STEEL:
      flairColor = "#B8B8D0";
      break;
    case TYPES.FAIRY:
      flairColor = "#F0B6BC";
      break;
    default:
      flairColor = "#808080";
  }
  return flairColor;
};


const TypeFlair = ({ type, font_size, width = "80px", height = "30px" }) => {
  const color = getFlairColor(type)

  return (
    <StyledFlair font_size={font_size} width={width} height={height} color={color}>
      {type}
    </StyledFlair>

  )
}

export default TypeFlair

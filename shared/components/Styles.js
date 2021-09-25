import styled, { css } from "styled-components";

//Styled button
export const StyledButton = styled.div`
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
    color: white !important;
  }
`;

//Styled heart icon
export const StyledHeartIcon = styled.div`
  cursor: pointer;

  & svg {
    color: ${(p) => {
      if (p.isFavorited) return "red !important";
      else return p.theme.discrete_font_color + "!important";
    }}
`;
//p.isFavorited || p.hovering ? "red" : p.theme.font_color} !important;

// export const Subheading1 = styled.p`
//   display: flex;
//   align-items: center;
//   font-weight: 900;
//   font-size: ${(props) => props.theme.font_size.subheading1};
// `;

// export const Subheading2 = styled.p`
//   display: flex;
//   align-items: center;
//   font-weight: 900;
//   font-size: ${(props) => props.theme.font_size.subheading2};
// `;
// export const BoldRegularText = styled.p`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
//   font-size: ${(props) => props.theme.font_size.regular};
// `;

// export const RegularText = styled.p`
//   display: flex;
//   align-items: center;
//   font-weight: 400;
//   font-size: ${(props) => props.theme.font_size.regular};
// `;

//Styled navbutton
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

//Styled typeflair
export const StyledTypeFlair = styled.div`
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

export const TypeFlairBox = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  column-gap: 3px;
  width: 165px;
`;

//Styled checkbox
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;

  & > input:focus div {
    box-shadow: 0 0 0 3px pink;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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

export const CheckboxIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
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

  ${CheckboxIcon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

//Links
export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    cursor: pointer;
    color: ${(p) => (p.darkBackground ? "white" : "black")} !important;
  }
`;

//Seperator
export const Seperator = styled.hr`
  width: 100%;
  border-top: 1px solid ${(p) => p.theme.colors.gray_40};
  border-bottom: 1px solid ${(p) => p.theme.colors.gray_10};
  border-left: 0px;
  border-right: 0px;
`;

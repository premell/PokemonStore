import styled, { css } from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const StyledPageArrow = styled.div`
  cursor: pointer;
  padding: 5px;
  padding-top: 11px;
  border-radius: 5px;
  &:hover {
    background-color: ${(p) => p.theme.colors.gray_40};
  }
`;

export const PrevPageArrow = ({ handleClick }) => {
  return (
    <StyledPageArrow onClick={handleClick}>
      <IoIosArrowBack />
    </StyledPageArrow>
  );
};
export const NextPageArrow = ({ handleClick }) => {
  return (
    <StyledPageArrow onClick={handleClick}>
      <IoIosArrowForward />
    </StyledPageArrow>
  );
};
export const PageNumber = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.isActive === false && p.theme.colors.gray_40};
  }
  background-color: ${(p) => p.isActive && p.theme.colors.accent_color};
  margin: 0 4px;
  padding: 8px;
  border-radius: 5px;

  & h3 {
    margin: 1px 0px;
    color: ${(p) => p.isActive && "white"};
  }
`;

export const PageNavigatorContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

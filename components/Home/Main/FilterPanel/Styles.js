import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 550px) {
    padding-left: 20px;
  }
`;

const StyledRemoveAllFilters = styled.div`
  cursor: pointer;
  margin: 8px 8px 0px 10px;

  box-sizing:border-box;
  transition: color 0.4s;
  transition: background-color 0.4s;
  padding: 0px 16px;
  height:30px;
  display:flex;
  align-items:center;

  border-radius: 4px;
  &:hover{
    background-color ${(p) => p.theme.colors.accent_color};
    color: white; 
  }
`;

export const RemoveAllFilters = ({ handleClick }) => {
  return (
    <StyledRemoveAllFilters onClick={handleClick}>
      <p>Clear all filters</p>
    </StyledRemoveAllFilters>
  );
};

const StyledFilterBox = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin: 8px 8px 0px 0px;
  background-color: ${(p) => p.theme.colors.gray_20};
  padding: 6px 8px 6px 12px;
  border-radius: 4px;
  box-sizing: border-box;

  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.colors.gray_40};
  }
`;

export const FilterBox = ({ handleClick, text }) => {
  return (
    <StyledFilterBox onClick={handleClick}>
      <p style={{ position: "relative" }}>{text}</p>
      <Cross />
    </StyledFilterBox>
  );
};

const StyledCross = styled.p`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.gray_80};
`;

const Cross = ({ handleClick }) => {
  return (
    <StyledCross onClick={handleClick}>
      <AiOutlineClose />
    </StyledCross>
  );
};

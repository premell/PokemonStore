import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Subheading2 } from "shared/components";

export const MainContainer = styled.div`
  width: 300px;
  height: 100vh;
  padding-left: 24px;
  flex-direction: column;
  display: flex;
  position: sticky;
  box-sizing: border-box;
  top: 76px;
  overflow-y: scroll;
  background-color: ${(p) => p.theme.colors.gray_10};
  margin-bottom: 50px;

  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  &:hover {
    scrollbar-color: ${(p) => p.theme.colors.gray_60} transparent;
  }
`;

export const StyledInnerContainer = styled.div`
  height: 100%;
  position: relative;
`;
export const TypeBox = styled.div`
  display: flex;
`;

export const FilterBox = styled.div`
  height: 20px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin: 0px;
`;

const ToggleHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & svg {
    padding: 6px;
    border-radius: 50%;
  }

  &:hover svg {
    background-color: ${(p) => p.theme.colors.gray_40};
  }
`;

export const FilterToggleHeading = ({ handleClick, children, menuVisible }) => {
  return (
    <ToggleHeadingContainer onClick={handleClick}>
      <Subheading2>{children}</Subheading2>
      {menuVisible ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
    </ToggleHeadingContainer>
  );
};

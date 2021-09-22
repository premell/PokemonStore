import styled, { css } from "styled-components";
import Image from "next/image";

export const ImageList = styled.div`
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

export const ImageContainer = ({ image, selected, handleClick }) => {
  return (
    <StyledImageContainer onClick={handleClick} selected={selected}>
      <Image quality={100} layout="fill" src={image} />
    </StyledImageContainer>
  );
};

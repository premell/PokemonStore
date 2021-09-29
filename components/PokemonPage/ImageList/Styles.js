import Image from "next/image";
import styled from "styled-components";

export const ImageList = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: clamp(50px, 10vw, 150px);
  height: clamp(200px, 40vw, 600px);

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

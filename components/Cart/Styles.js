import styled from "styled-components";


const StyledHeader = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    margin-top: 40px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Shopping cart</h1>
    </StyledHeader>
  );
};

export const HeartContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 300;
`;

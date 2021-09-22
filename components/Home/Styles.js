import styled from "styled-components";

export const NavbarExtender = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  height: 30px;
  width: 100vw;
  z-index: 300;

  position: absolute;
  left: 0;
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(p) => p.theme.colors.gray_10};
  padding-bottom: 50px;

  box-sizing: border-box;
`;

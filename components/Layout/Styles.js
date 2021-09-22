import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.gray_10};

  & p {
    color: ${(p) => p.theme.font_color};
  }
  & h1 {
    color: ${(p) => p.theme.font_color};
  }
  & h2 {
    color: ${(p) => p.theme.font_color};
  }
  & h3 {
    color: ${(p) => p.theme.font_color};
  }

  & svg {
    color: ${(p) => p.theme.font_color};
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1900px;
  margin-top: 76px;
`;

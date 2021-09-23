import styled, { css } from "styled-components";

export const MainImage = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  position: relative;
  border-radius: 20px;
  margin-right: 20px;

  width: clamp(350px, 50vw, 700px);
  height: clamp(350px, 50vw, 700px);
`;

// width: 50vw;
// max-width: 690px;
// height: min(calc(100% - 40px), 50vw);

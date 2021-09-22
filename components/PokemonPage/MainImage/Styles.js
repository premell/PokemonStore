import styled, { css } from "styled-components";

export const MainImage = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  position: relative;
  width: 50vw;
  max-width: 690px;
  height: min(calc(100% - 40px), 50vw);
  border-radius: 20px;
  margin-right: 20px;
`;

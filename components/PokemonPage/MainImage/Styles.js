import styled from "styled-components";

export const MainImage = styled.div`
  background-color: ${(p) => p.theme.colors.gray_0};
  position: relative;
  border-radius: 20px;
  margin-right: 20px;

  width: clamp(350px, 50vw, 700px);
  height: clamp(350px, 50vw, 700px);
`;

import styled from "styled-components";


export const MainContainer = styled.div`
  height: calc(100vh - 376px);
  min-height: 750px;
  max-width: 1900px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MainContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & * {
    margin-right: 10px;
  }
`;

export const FavoritesHeartContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 40px;

  width: 50px;
  height: 50px;
`;

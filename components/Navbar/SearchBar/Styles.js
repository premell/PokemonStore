import styled from "styled-components";

export const SearchBar = styled.div`
  height: 45px;
  flex: 1;
  max-width: 600px;
  min-width: 300px;

  border-radius: 4px;
  padding: 8px 10px 8px 16px;
  box-sizing: border-box;
  border: ${(p) => `1px solid ${p.theme.colors.gray_40}`};

  background-color: ${(p) => p.theme.colors.gray_10};

  display: flex;
  align-items: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${(p) => p.theme.colors.gray_60};
  }
`;

export const Input = styled.input.attrs({ type: "text" })`
  background-color: ${(p) => p.theme.colors.gray_10};
  color: ${(p) => p.theme.font_color};
  width: 100%;
  height: 100%;
  cursor: text;
  outline: none;
  border: none;
`;

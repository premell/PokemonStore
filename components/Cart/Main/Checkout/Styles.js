import styled from "styled-components";

export const Checkout = styled.div`
  width: 330px;
  background-color: ${(p) => p.theme.colors.gray_0};
  height: 100px;
  border-radius: 8px;
  padding: 40px;
  flex: 2;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutButton = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  cursor: not-allowed;
  height: 60px;

  background-color: ${(p) => p.theme.colors.green_light};
  &:hover {
    background-color: ${(p) => p.theme.colors.green_hover};
  }
  & h3 {
    color: white !important;
  }
`;

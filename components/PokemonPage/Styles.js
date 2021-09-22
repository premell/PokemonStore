import styled, { css } from "styled-components";
import Image from "next/image";
import {
  FavoritesHeart,
  Subheading1,
  Subheading2,
  Button,
} from "shared/components";
import { TypeFlair } from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import { useCart, useCartModal } from "shared/hooks";
import { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { AddToCartButton } from "shared/components";

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
//padding-left:24px;

export const FavoritesHeartContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 40px;

  width: 50px;
  height: 50px;
`;

//   export const Button = ({ handleClick, type, innerText, height = "300px", width = "330px" }) => {
//
//   }
// <ItemContainer>
//   {stats.map((ability) => <Ability>{ability}</Ability>)}
// </ItemContainer>

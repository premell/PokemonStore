import styled from "styled-components";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { useCart, useCartModal, useWindowSize } from "shared/hooks";
import { useEffect, useState } from "react";
import {
  FavoritesHeart,
  Subheading1,
  Subheading2,
  BoldRegularText,
  Button,
  AddToCartButton,
} from "shared/components";
import Link from "next/link";
import {
  formatAsUSDWithoutTrailingZeros,
  removeDuplicateObjectsByName,
  removeOverlappingObjectsByName,
} from "shared/javascript";

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

//RECOMMENDED SECTION

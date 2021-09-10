import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Login from "./Login";
import DarkMode from "./DarkMode";
import {
  MainContainer,
  ContentContainer,
  LeftSubContainer,
  HideAnimationContainer,
  RightSubContainer,
} from "./Styles";

import { Links } from "shared/components";
import { useRouter } from "next/router";

import { useRecoilState, useResetRecoilState } from "recoil";
import { priceFilter as priceFilterAtoms } from "atoms.js";
import { statsFilter as statsFilterAtoms } from "atoms.js";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { abilityFilter as abilityFilterAtoms } from "atoms.js";

import { Title2 } from "shared/components";
import {
  useEscapeButtonListener,
  useShowCartModalOnCartUpdate,
} from "@/shared/hooks";

const Navbar = () => {
  const defaultPriceFilter = useResetRecoilState(priceFilterAtoms);
  const defaultStatsFilter = useResetRecoilState(statsFilterAtoms);
  const defaultTypeFilter = useResetRecoilState(typeFilterAtoms);
  const defaultAbilityFilter = useResetRecoilState(abilityFilterAtoms);

  const router = useRouter();
  const handleGoToHome = () => {
    defaultPriceFilter();
    defaultStatsFilter();
    defaultTypeFilter();
    defaultAbilityFilter();
    router.push("/");
  };

  return (
    <MainContainer>
      <ContentContainer>
        <LeftSubContainer>
          <Title2 style={{ cursor: "pointer" }} onClick={handleGoToHome}>
            POKEMON TRADER
          </Title2>
          <SearchBar />
        </LeftSubContainer>
        <HideAnimationContainer>
          <RightSubContainer>
            <Login />
            <Favorites />
            <Cart />
            <Links backgroundColor="white" size={30} />
            <DarkMode />
          </RightSubContainer>
        </HideAnimationContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Navbar;

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
  MainMiniContainer,
} from "./Styles";

import { Links } from "shared/components";
import { useRouter } from "next/router";

import { useRecoilState, useResetRecoilState } from "recoil";
import { priceFilter as priceFilterAtoms, searchQuery } from "atoms.js";
import { statsFilter as statsFilterAtoms } from "atoms.js";
import { typeFilter as typeFilterAtoms } from "atoms.js";
import { abilityFilter as abilityFilterAtoms } from "atoms.js";
import { searchQuery as searchQueryAtoms } from "atoms.js";

import { Title2 } from "shared/components";
import {
  useEscapeButtonListener,
  useShowCartModalOnCartUpdate,
  useWindowSize,
} from "shared/hooks";

import { darkThemeEnabled as darkThemeEnabledAtoms } from "atoms.js";
import { useState, useEffect } from "react";

const Navbar = () => {
  const defaultPriceFilter = useResetRecoilState(priceFilterAtoms);
  const defaultStatsFilter = useResetRecoilState(statsFilterAtoms);
  const defaultTypeFilter = useResetRecoilState(typeFilterAtoms);
  const defaultAbilityFilter = useResetRecoilState(abilityFilterAtoms);
  const defaultSeachQuery = useResetRecoilState(searchQueryAtoms);

  const [windowWidth, setWindowWidth] = useState(0);

  const [darkThemeEnabled, setDarkThemeEnabled] = useRecoilState(
    darkThemeEnabledAtoms
  );

  const router = useRouter();
  const handleGoToHome = () => {
    console.log("HSAJNSADF");
    defaultPriceFilter();
    defaultStatsFilter();
    defaultTypeFilter();
    defaultAbilityFilter();
    defaultSeachQuery();
    router.push("/");
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleResize = () => setWindowWidth(window.innerWidth);
  useWindowSize(handleResize);

  return (
    <>
      {windowWidth > 650 ? (
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
                <Links darkBackground={darkThemeEnabled} size={30} />
                <DarkMode />
              </RightSubContainer>
            </HideAnimationContainer>
          </ContentContainer>
        </MainContainer>
      ) : (
        <MainMiniContainer>
          <RightSubContainer>
            <Login />
            <Favorites />
            <Cart />
            <Links darkBackground={darkThemeEnabled} size={30} />
            <DarkMode />
          </RightSubContainer>
          <SearchBar />
        </MainMiniContainer>
      )}
    </>
  );
};

export default Navbar;

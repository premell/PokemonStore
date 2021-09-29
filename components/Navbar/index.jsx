import { abilityFilter as abilityFilterAtoms, currentPage as currentPageAtoms, darkThemeEnabled as darkThemeEnabledAtoms, priceFilter as priceFilterAtoms, searchQuery as searchQueryAtoms, statsFilter as statsFilterAtoms, typeFilter as typeFilterAtoms } from "atoms.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Links } from "shared/components";
import {
  useWindowSize
} from "shared/hooks";
import Cart from "./Cart";
import DarkMode from "./DarkMode";
import Favorites from "./Favorites";
import Login from "./Login";
import SearchBar from "./SearchBar";
import {
  ContentContainer, HideAnimationContainer, LeftSubContainer, MainContainer, MainMiniContainer, RightSubContainer, Title2
} from "./Styles";





const Navbar = () => {
  const defaultPriceFilter = useResetRecoilState(priceFilterAtoms);
  const defaultStatsFilter = useResetRecoilState(statsFilterAtoms);
  const defaultTypeFilter = useResetRecoilState(typeFilterAtoms);
  const defaultAbilityFilter = useResetRecoilState(abilityFilterAtoms);
  const defaultSeachQuery = useResetRecoilState(searchQueryAtoms);
  const defaultCurrentPage = useResetRecoilState(currentPageAtoms);

  const [windowWidth, setWindowWidth] = useState(0);

  const [darkThemeEnabled, setDarkThemeEnabled] = useRecoilState(
    darkThemeEnabledAtoms
  );

  const router = useRouter();
  const handleGoToHome = () => {
    defaultPriceFilter();
    defaultStatsFilter();
    defaultTypeFilter();
    defaultAbilityFilter();
    defaultSeachQuery();
    defaultCurrentPage();
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
              <Title2 onClick={handleGoToHome}>JigglyStore</Title2>
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

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useRouter } from "next/router";
import * as S from "./Styles";

import { useEffect, useRef, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import { useCartModal } from "shared/hooks";

import { useRecoilState } from "recoil";
import { showFavorites as showFavoritesAtoms } from "atoms.js";
import { searchQuery as searchQueryAtoms } from "atoms.js";

import { useScrollPosition } from "shared/hooks";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

//overflow-x: hidden;
//overflow: hidden;
import themes from "styles/theme";
import { darkThemeEnabled as darkThemeEnabledAtoms } from "atoms.js";

let firstRun = true;
const Layout = ({ children }) => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useRecoilState(
    darkThemeEnabledAtoms
  );
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    if (darkThemeEnabled) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }, [darkThemeEnabled]);

  const router = useRouter();
  const { hideWithTimer, hideTemporarly, hideInstantly } = useCartModal();

  const [showFavorites, setShowFavorites] = useRecoilState(showFavoritesAtoms);

  useEffect(() => {
    if (showFavorites) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [showFavorites]);

  useEffect(() => {
    hideWithTimer();
    hideTemporarly();
    hideInstantly();
    setShowFavorites(false);
  }, [router.asPath]);

  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtoms);

  useEffect(() => {
    if (firstRun) {
      firstRun = false;
      return;
    }
    console.log("AHSDKJLHASKJD");
    if (router.asPath !== "/") router.push("/");
  }, [searchQuery]);

  return (
    <ThemeProvider theme={theme}>
      <S.MainContainer darkThemeEnabled={darkThemeEnabled}>
        <Navbar />
        <S.MainContent>{children}</S.MainContent>
        <Footer />
      </S.MainContainer>
    </ThemeProvider>
  );
};
export default Layout;

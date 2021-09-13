import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useCartModal } from "shared/hooks";

import { useRecoilState } from "recoil";
import { showFavorites as showFavoritesAtoms } from "atoms.js";

import { useScrollPosition } from "shared/hooks";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.gray_10};

  & p {
    color: ${(p) => p.theme.font_color};
  }

  & svg {
    color: ${(p) => p.theme.font_color};
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1900px;
  margin-top: 76px;
`;

//overflow-x: hidden;
//overflow: hidden;
import themes from "styles/theme";
import { darkThemeEnabled as darkThemeEnabledAtoms } from "atoms.js";

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

  const [showFavorites, setShowFavorites] = useRecoilState(showFavoritesAtoms);

  const { hideWithTimer, hideTemporarly, hideInstantly } = useCartModal();

  useEffect(() => {
    if (showFavorites) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [showFavorites]);

  useEffect(() => {
    hideWithTimer();
    hideTemporarly();
    hideInstantly();
  }, [router.asPath]);

  return (
    <ThemeProvider theme={theme}>
      <MainContainer darkThemeEnabled={darkThemeEnabled}>
        <Navbar />
        <MainContent>{children}</MainContent>
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};
export default Layout;

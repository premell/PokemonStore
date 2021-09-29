import { darkThemeEnabled as darkThemeEnabledAtoms, searchQuery as searchQueryAtoms, showFavorites as showFavoritesAtoms } from "atoms.js";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useCartModal } from "shared/hooks";
import { ThemeProvider } from "styled-components";
//overflow-x: hidden;
//overflow: hidden;
import themes from "styles/theme";
import * as S from "./Styles";







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

import styled from "styled-components";
import { useRouter } from "next/router";

import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useCartModal } from "shared/hooks";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.gray_10};

  overflow-x: hidden;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1900px;
  margin-top: 76px;
  overflow: hidden;
`;
const Layout = ({ children }) => {
  const router = useRouter();

  const { hideWithTimer, hideTemporarly, hideInstantly } = useCartModal();

  useEffect(() => {
    hideWithTimer();
    hideTemporarly();
    hideInstantly();
  }, [router.asPath]);

  return (
    <MainContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </MainContainer>
  );
};
export default Layout;

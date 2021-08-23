import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

import GlobalStyle from "styles/GlobalStyle"
import theme from "styles/theme"

import Layout from "components/Layout"


const MyApp = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />

    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  </>
}

export default MyApp

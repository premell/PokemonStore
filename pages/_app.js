import { RecoilRoot } from "recoil";

import GlobalStyle from "styles/GlobalStyle";

import Layout from "components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
};

export default MyApp;

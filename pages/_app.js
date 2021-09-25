import { RecoilRoot } from "recoil";
import Head from "next/head";

import GlobalStyle from "styles/GlobalStyle";

import Layout from "components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>JigglyStore</title>
        <meta name="description" content="Pokemon Store" />
        <link rel="icon" href="static/jigglypuff_icon.png" />
      </Head>
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

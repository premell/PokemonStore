import Cart from "components/Cart";
import Head from "next/head";

const cart = () => {
  return (
    <>
      <Head>
        <title>JigglyStore Cart</title>
        <meta name="description" content="cart " />
      </Head>

      <Cart />
    </>
  );
};

export default cart;

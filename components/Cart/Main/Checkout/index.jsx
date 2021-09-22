import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import * as S from "./Styles";

const Checkout = ({ total }) => {
  return (
    <S.Checkout>
      <h1>Total: {formatAsUSDWithoutTrailingZeros(total)}</h1>
      <S.CheckoutButton>
        <h3>Continue to checkout</h3>
      </S.CheckoutButton>
    </S.Checkout>
  );
};

export default Checkout;

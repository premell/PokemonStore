import { FiShoppingCart } from "react-icons/fi";
import { StyledCartButton } from "../Styles";

import { BoldRegularText } from "shared/components";
import { useRouter } from "next/router";

import CartModal from "./CartModal";

const CartButton = ({
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  children,
}) => {
  const router = useRouter();
  const handleGoToCart = () => router.push("/cart");

  return (
    <div
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <StyledCartButton
        onClick={handleGoToCart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FiShoppingCart size={20} style={{ strokeWidth: "2" }} />
        <BoldRegularText>Shopping cart</BoldRegularText>
      </StyledCartButton>
      {children}
    </div>
  );
};

export default CartButton;

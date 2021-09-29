import { useRouter } from "next/router";
import { FiShoppingCart } from "react-icons/fi";
import { NavButton } from "shared/components";



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
        marginRight: "10px",
      }}
    >
      <NavButton
        onClick={handleGoToCart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width="60px"
      >
        <FiShoppingCart size={22} style={{ strokeWidth: "2" }} />
        <h3>Cart</h3>
      </NavButton>
      {children}
    </div>
  );
};

export default CartButton;

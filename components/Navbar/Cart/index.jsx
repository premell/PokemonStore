import { showCartModal as showCartModalAtoms, showCartModalInstantly as showCartModalInstantlyAtoms } from "atoms.js";
import { useRecoilState } from "recoil";
import { useCartModal } from "shared/hooks";
import CartButton from "./CartButton";
import CartModal from "./CartModal";




const Cart = () => {
  const { showWithTimer, showTemporarily, hideTemporarly } = useCartModal()
  const [showCartModal, setShowCartModal] = useRecoilState(showCartModalAtoms);
  const [showCartModalInstantly, setShowCartModalInstantly] = useRecoilState(showCartModalInstantlyAtoms);

  const handleMouseEnter = () => {
    showTemporarily()
  }
  const handleMouseLeave = () => {
    hideTemporarly()
  }

  return (
    <CartButton handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}>
      <CartModal show={showCartModalInstantly} showWithAnimation={showCartModal} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} />
    </CartButton>
  )
}

export default Cart

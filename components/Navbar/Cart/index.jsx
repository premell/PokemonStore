import { useRecoilState } from "recoil";
import { cart as cartAtoms } from "atoms.js";
import { showCartModal as showCartModalAtoms } from "atoms.js";
import { showCartModalInstantly as showCartModalInstantlyAtoms } from "atoms.js";

import CartModal from "./CartModal";
import CartButton from "./CartButton";

import { useEffect } from "react";

import { useCartModal } from "shared/hooks"

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

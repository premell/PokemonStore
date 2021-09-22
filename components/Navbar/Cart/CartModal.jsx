import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import { FiShoppingCart } from "react-icons/fi";
import {
  ForgivingBorder,
  StyledCartModal,
  ModalPokemonCard,
  ModalPokemonCartContainer,
  ModalPokemonCartFooter,
  NoPokemonFoundContainer,
} from "../Styles";

import { BoldRegularText, Subheading2, Subheading1 } from "shared/components";
import { useCart } from "shared/hooks";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

const CartModal = ({
  show,
  showWithAnimation,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { getCurrentCart, removePokemonFromCart, getCurrentTotal } = useCart();
  const cartPokemon = getCurrentCart();
  const total = getCurrentTotal();
  const router = useRouter();

  const handleDeleteClick = (pokemon) => removePokemonFromCart(pokemon);

  const handleRouteClick = (pokemon) => router.push(`/pokemon/${pokemon.name}`);

  return (
    <ForgivingBorder
      showWithAnimation={showWithAnimation}
      show={show}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledCartModal>
        <ModalPokemonCartContainer>
          {cartPokemon.length !== 0 ? (
            cartPokemon.map((pokemon) => (
              <ModalPokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                handleRouteClick={() => handleRouteClick(pokemon)}
                handleDeleteClick={() => handleDeleteClick(pokemon)}
              />
            ))
          ) : (
            <NoPokemonFoundContainer>
              Your cart is empty
            </NoPokemonFoundContainer>
          )}
        </ModalPokemonCartContainer>
        <ModalPokemonCartFooter>
          <h1>Total:</h1>
          <h1>{formatAsUSDWithoutTrailingZeros(total)}</h1>
        </ModalPokemonCartFooter>
      </StyledCartModal>
    </ForgivingBorder>
  );
};

export default CartModal;

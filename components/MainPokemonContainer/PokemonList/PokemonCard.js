import {
  StyledPokemonCard,
  TypeContainer,
  StyledPokemonMain,
  HeartContainer,
} from "../Styles";
import {
  Button,
  Subheading2,
  BoldRegularText,
  RegularText,
} from "@/shared/components";
import Image from "next/image";
import Link from "next/link";
import { TypeFlair } from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

import { FavoritesHeart } from "shared/components";

import { useCart, useCartModal } from "shared/hooks";

const PokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  const { showWithTimer } = useCartModal();
  const { getCurrentCart, addPokemonToCart, removePokemonFromCart } = useCart();

  const findPokemon = getCurrentCart().filter(
    (arrayPokemon) => arrayPokemon.name === pokemon.name
  );
  const pokemonExistsInCart = findPokemon.length !== 0;

  const handleButtonClick = () => {
    if (pokemonExistsInCart) removePokemonFromCart(pokemon);
    else addPokemonToCart(pokemon);

    showWithTimer();
  };

  return (
    <StyledPokemonCard>
      <HeartContainer>
        <FavoritesHeart pokemon={pokemon} />
      </HeartContainer>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <StyledPokemonMain>
          <Image quality={100} width={150} height={150} src={image_url} />
          <BoldRegularText>{name}</BoldRegularText>
          <TypeContainer>
            {types.map((type) => (
              <TypeFlair key={type} type={type} />
            ))}
          </TypeContainer>
          <Subheading2>{formatAsUSDWithoutTrailingZeros(price)}</Subheading2>
        </StyledPokemonMain>
      </Link>
      <Button
        handleClick={handleButtonClick}
        type={`${pokemonExistsInCart ? "negative" : "positive"}`}
        innerText={`${
          !pokemonExistsInCart ? "Add to cart" : "Remove from cart"
        }`}
        width="80%"
        height="30px"
      />
    </StyledPokemonCard>
  );
};

export default PokemonCard;

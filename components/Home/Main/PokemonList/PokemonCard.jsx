import Image from "next/image";
import Link from "next/link";
import { AddToCartButton, FavoritesHeart, TypeFlairBox } from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import {
  HeartContainer, StyledPokemonCard,
  StyledPokemonMain
} from "../Styles";



const PokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  return (
    <StyledPokemonCard>
      <HeartContainer>
        <FavoritesHeart pokemon={pokemon} />
      </HeartContainer>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <StyledPokemonMain>
          <Image quality={100} width={150} height={150} src={image_url} />
          <h3>{name}</h3>
          <TypeFlairBox types={types} />
          <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
        </StyledPokemonMain>
      </Link>
      <AddToCartButton width="80%" height="30px" pokemon={pokemon} />
    </StyledPokemonCard>
  );
};

export default PokemonCard;

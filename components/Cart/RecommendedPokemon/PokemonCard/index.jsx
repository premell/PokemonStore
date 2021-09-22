import * as S from "./Styles";
import * as PS from "../Styles";
import Link from "next/link";
import Image from "next/image";
import {
  FavoritesHeart,
  TypeFlairBox,
  AddToCartButton,
} from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";

const PokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;

  return (
    <S.PokemonCard>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <div style={{ cursor: "pointer" }}>
          <S.HeartContainer>
            <FavoritesHeart pokemon={pokemon} />
          </S.HeartContainer>
          <Image quality={100} width={190} height={190} src={image_url} />
          <h3>{name}</h3>
          <TypeFlairBox types={types} />
        </div>
      </Link>
      <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
      <AddToCartButton
        width="80%"
        height="30px"
        pokemon={pokemon}
        activateCartDropdown={true}
      />
    </S.PokemonCard>
  );
};

export default PokemonCard;

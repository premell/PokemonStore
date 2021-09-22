import Link from "next/link";

import * as S from "./Styles";
import * as PS from "../Styles";
import * as PPS from "../../Styles";
import { AddToCartButton, FavoritesHeart } from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript";
import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  const { name, types, price, images, image_url } = pokemon;

  return (
    <S.CartCard>
      <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
        <div style={{ cursor: "pointer" }}>
          <S.ImageContainer>
            <Image quality={100} width={200} height={200} src={image_url} />
            <S.HeartContainer>
              <FavoritesHeart pokemon={pokemon} />
            </S.HeartContainer>
          </S.ImageContainer>
        </div>
      </Link>
      <S.PokemonInformation>
        <h3>{name}</h3>
        <S.ButtonContainer>
          <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
          <AddToCartButton width="130px" height="40px" pokemon={pokemon} />
        </S.ButtonContainer>
      </S.PokemonInformation>
    </S.CartCard>
  );
};

export default PokemonCard;

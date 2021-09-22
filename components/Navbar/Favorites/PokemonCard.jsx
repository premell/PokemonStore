import { FavoritesHeart, TypeFlairBox } from "shared/components";
import * as S from "./Styles";

const PokemonCard = ({ pokemon }) => {
  const { name, types, price, image_url } = pokemon;
  return (
    <div>
      <div>
        <S.PokemonCardContainer>
          <div style={{ cursor: "pointer" }}>
            <Link as={`/pokemon/${name}`} href="/pokemon/[pokemonName]">
              <a>
                <Image quality={100} width={200} height={200} src={image_url} />
              </a>
            </Link>
          </div>
          <S.InformationContainer>
            <h3>{name}</h3>
            <TypeFlairBox types={types} />
            <S.ButtonContainer>
              <h2>{formatAsUSDWithoutTrailingZeros(price)}</h2>
              <S.CartButton
                handleClick={handleButtonClick}
                type={`${pokemonExistsInCart ? "negative" : "positive"}`}
                innerText={`${
                  !pokemonExistsInCart ? "Add to cart" : "Remove from cart"
                }`}
                width="120px"
                height="30px"
                activateCartDropdown="true"
              />
            </S.ButtonContainer>
          </S.InformationContainer>
          <S.HeartContainer>
            <FavoritesHeart pokemon={pokemon} />
          </S.HeartContainer>
        </S.PokemonCardContainer>
      </div>
    </div>
  );
};

export default PokemonCard;

import * as S from "./Styles.js";
import { TypeFlair, AddToCartButton } from "shared/components";
import { formatAsUSDWithoutTrailingZeros } from "shared/javascript.js";
import { useEffect } from "react";

const PokemonInformation = ({ pokemon }) => {
  const { name, stats, price, types, abilities, image_urls } = pokemon;

  return (
    <S.StyledPokemonInformation>
      <h1 style={{ fontSize: "35px", margin: "8px 0px" }}>{name}</h1>
      <S.ItemContainer style={{ marginBottom: "20px" }}>
        {types.map((type) => (
          <TypeFlair key={type} type={type} width="100px" height="40px" />
        ))}
      </S.ItemContainer>
      <h1>Abilities</h1>
      <S.ItemContainer>
        {abilities.map((ability) => (
          <S.Ability key={ability}>
            <p>{ability}</p>
          </S.Ability>
        ))}
      </S.ItemContainer>
      <h1>Stats</h1>
      <S.ItemContainer>
        {stats.map((stat) => {
          return (
            <S.Stat
              key={Object.keys(stat)[0]}
              statName={Object.keys(stat)[0]}
              value={Object.values(stat)[0]}
            />
          );
        })}
      </S.ItemContainer>
      <S.ItemContainer
        style={{
          marginTop: "30px",
          width: "300px",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontSize: "28px" }}>
          {formatAsUSDWithoutTrailingZeros(price)}
        </h1>
        <AddToCartButton height="50px" width="180px" pokemon={pokemon} />
      </S.ItemContainer>
    </S.StyledPokemonInformation>
  );
};

export default PokemonInformation;

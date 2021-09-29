import Image from "next/image";
import { FavoritesHeart } from "shared/components";
import * as PS from "../Styles.js";
import * as S from "./Styles";


const MainImage = ({ defaultImage, image, pokemon }) => {
  pokemon = { ...pokemon, image_url: defaultImage };
  return (
    <S.MainImage>
      <Image quality={100} layout="fill" src={image} />
      <PS.FavoritesHeartContainer>
        <FavoritesHeart pokemon={pokemon} size={42} />
      </PS.FavoritesHeartContainer>
    </S.MainImage>
  );
};

export default MainImage;

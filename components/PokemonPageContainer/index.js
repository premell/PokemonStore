import {
  MainContainer,
  MainContent,
  PokemonInformation,
  ImageList,
  MainImage,
} from "./Styles";
import Image from "next/image";
import { useEffect, useState } from "react";

const PokemonPageContainer = ({ pokemon }) => {
  const { image_urls } = pokemon;

  const [selectedImage, setSelectedImage] = useState(image_urls[0]);

  useEffect(() => {
    setSelectedImage(pokemon.image_urls[0]);
  }, [pokemon]);

  return (
    <MainContainer>
      <MainContent>
        <ImageList
          handleNewSelected={(image) => setSelectedImage(image)}
          images={image_urls}
          selectedImage={selectedImage}
        />
        <MainImage image={selectedImage} />
        <PokemonInformation pokemon={pokemon} />
      </MainContent>
    </MainContainer>
  );
};

export default PokemonPageContainer;

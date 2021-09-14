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
  console.log(image_urls);

  const [selectedImage, setSelectedImage] = useState(pokemon.image_urls[0]);

  useEffect(() => {
    setSelectedImage(image_urls[0]);
  }, [pokemon]);

  return (
    <MainContainer>
      <MainContent>
        <ImageList
          handleNewSelected={(image) => setSelectedImage(image)}
          images={image_urls}
          selectedImage={selectedImage}
        />
        {selectedImage !== null ? (
          <MainImage
            defaultImage={image_urls[0]}
            image={selectedImage}
            pokemon={pokemon}
          />
        ) : null}
        <PokemonInformation pokemon={pokemon} />
      </MainContent>
    </MainContainer>
  );
};

export default PokemonPageContainer;

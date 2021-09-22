import { MainContainer, MainContent } from "./Styles";

import ImageList from "./ImageList";
import MainImage from "./MainImage";
import PokemonInformation from "./PokemonInformation";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "shared/hooks";

const PokemonPageContainer = ({ pokemon }) => {
  const { image_urls } = pokemon;

  const [selectedImage, setSelectedImage] = useState(pokemon.image_urls[0]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setSelectedImage(image_urls[0]);
  }, [pokemon]);

  useEffect(() => {
    setWindowWidth(window.outerWidth);
  }, []);

  useWindowSize(() => setWindowWidth(window.outerWidth));

  return (
    <MainContainer>
      <MainContent>
        {windowWidth > 1000 && (
          <ImageList
            handleNewSelected={(image) => setSelectedImage(image)}
            images={image_urls}
            selectedImage={selectedImage}
          />
        )}
        {selectedImage !== null && windowWidth > 650 && (
          <MainImage
            defaultImage={image_urls[0]}
            image={selectedImage}
            pokemon={pokemon}
          />
        )}
        <PokemonInformation pokemon={pokemon} />
      </MainContent>
    </MainContainer>
  );
};

export default PokemonPageContainer;

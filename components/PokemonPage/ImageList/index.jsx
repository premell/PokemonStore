import { useEffect, useRef } from "react";

import * as S from "./Styles";
import * as PS from "../Styles.js";

const ImageList = ({ images, selectedImage, handleNewSelected }) => {
  const anyImageAvailable = useRef(true);
  useEffect(() => {
    let allImagesNull = true;
    images.forEach((image) => {
      if (image !== null) allImagesNull = false;
    });
    if (allImagesNull) anyImageAvailable.current = false;
  }, []);

  return (
    <S.ImageList>
      {anyImageAvailable.current
        ? images.map(
            (image) =>
              image !== null && (
                <S.ImageContainer
                  key={image}
                  handleClick={() => handleNewSelected(image)}
                  image={image}
                  selected={image === selectedImage}
                />
              )
          )
        : null}
    </S.ImageList>
  );
};

export default ImageList;

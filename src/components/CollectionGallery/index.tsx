import React from "react";
import { GalleryContainer, ImageCard, Image } from "./styles";

const images = Array.from(
  { length: 9 },
  (_, i) => `/img/imgs/img-${i + 1}.jpg`
);

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      {images.map((src, index) => (
        <ImageCard key={index}>
          <Image src={src} alt={`Gallery Img-${index + 1}`} />
        </ImageCard>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;

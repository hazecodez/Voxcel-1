import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px;
  padding: 40px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &.landscape {
    grid-column: span 2;
    grid-row: span 1;
  }

  &.portrait {
    grid-column: span 1;
    grid-row: span 2;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

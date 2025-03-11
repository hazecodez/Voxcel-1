import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 5rem 8rem;
  background-color: black;
  color: white;
  text-align: center;
  transition: opacity 0.5s ease-in-out;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 1rem 3rem; 
  }
`;

export const Title = styled("p")`
  font-size: 34px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
    @media only screen and (max-width: 1024px) {
    font-size: 34px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ReviewText = styled("p")`
  font-size: 1.3rem;
  margin: 1.5rem 0 2rem 0;
  font-style: italic;
  color: white; /* Ensure text remains white */
  transition: opacity 0.5s ease-in-out;
`;

export const ReviewAuthor = styled("p")`
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.8;
  color: white; /* Ensure author text remains white */
`;

export const DotsContainer = styled("div")`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Dot = styled("span")<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "white" : "gray")};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: lightgray;
  }
`;

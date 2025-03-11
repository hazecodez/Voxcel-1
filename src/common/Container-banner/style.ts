import styled from "styled-components";

export const StyledContainerBanner = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100vw; 
  max-width: unset;
  margin: 0; 
  padding: 0 0px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  background-image: url("your-image-url.jpg");
  background-size: cover;
  background-position: -100px center; /* Moves left */
  background-repeat: no-repeat;

  @media only screen and (max-width: 1024px) {
    padding: 0 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 0px;
  }

  @media only screen and (max-width: 414px) {
    padding: 0 0px;
  }
`;

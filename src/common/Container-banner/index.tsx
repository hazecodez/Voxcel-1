import { StyledContainerBanner } from "./style";
import { ContainerProps } from "../types";

const ContainerBanner = ({ border, children }: ContainerProps) => (
  <StyledContainerBanner border={border}>{children}</StyledContainerBanner>
);

export default ContainerBanner;

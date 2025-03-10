import { SvgIconProps } from "../types";

export const Img = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/imgs/${src}`} alt={src} width={width} height={height} />
);

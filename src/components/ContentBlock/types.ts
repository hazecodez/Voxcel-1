import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  color: string;
  icon?: string;
  title: string;
  content: string;
  t: TFunction;
  id: string;
  direction: "left" | "right";
}

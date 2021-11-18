import React from "react";
import { TypographyStyle } from "./style";

interface ITypographyProps {
  children: string;
  variant: "link" | "tab" | "multiplier" | "button";
}

const Typography: React.FC<ITypographyProps> = ({ children, variant }) => {
  return <TypographyStyle variant={variant}>{children}</TypographyStyle>;
};
export default Typography;

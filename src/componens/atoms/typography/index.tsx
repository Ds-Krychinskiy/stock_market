import React from "react";
import { TypographyStyle } from "./style";

interface ITypographyProps {
  children: string;
}

const Typography: React.FC<ITypographyProps> = ({ children }) => {
  return <TypographyStyle>{children}</TypographyStyle>;
};
export default Typography;

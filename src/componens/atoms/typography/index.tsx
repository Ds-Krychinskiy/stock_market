import React, { ReactNode } from "react";
import { TypographyStyle } from "./style";

interface ITypographyProps {
  children: ReactNode;
}

const Typography: React.FC<ITypographyProps> = ({ children }) => {
  return <TypographyStyle>{children}</TypographyStyle>;
};
export default Typography;

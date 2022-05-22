import { ReactNode, forwardRef } from "react";
import { TypograhyStyle } from "./style";
import { motion } from "framer-motion";
interface TypograhyProps {
  children: JSX.Element | ReactNode;
  size: string;
}
export const Typography: React.FC<TypograhyProps> = forwardRef(
  ({ children, size }, ref) => {
    return <TypograhyStyle children={children} ref={ref} size={size} />;
  }
);

export const MTypography = motion(Typography);

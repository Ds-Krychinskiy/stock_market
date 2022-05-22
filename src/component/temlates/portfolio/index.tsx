import { ReactElement } from "react";
import { InformStyle } from "./style";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface InformProps {
  children: ReactElement;
}
export const Inform: React.FC<InformProps> = forwardRef(({ children }, ref) => {
  return <InformStyle ref={ref}>{children}</InformStyle>;
});

export const MInform = motion(Inform);

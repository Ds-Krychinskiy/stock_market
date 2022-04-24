import { ReactElement } from "react";
import { InformStyle } from "./style";
interface InformProps {
  children: ReactElement;
}
const Inform: React.FC<InformProps> = ({ children }) => {
  return <InformStyle>{children}</InformStyle>;
};

export default Inform;

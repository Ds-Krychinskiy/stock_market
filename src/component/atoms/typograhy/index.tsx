import { ReactNode } from "react";
import { TypograhyStyle, PortfolioStyle, H3 } from "./style";
interface TypograhyProps {
  children: JSX.Element | ReactNode;variant: string;
}
const Typography: React.FC<TypograhyProps> = ({ children, variant }) => {
  switch(variant){
    case "hello": return <PortfolioStyle children={children}/>
    case "h2":  return <TypograhyStyle>{children}</TypograhyStyle>;
    case "h3": return <H3>{children}</H3>
    default: return <h2>{children}</h2>
  }

};

export default Typography;

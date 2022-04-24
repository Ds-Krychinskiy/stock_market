import { TypograhyStyle } from "./style";
interface TypograhyProps {
  children: JSX.Element | string;
}
const Typography: React.FC<TypograhyProps> = ({ children }) => {
  return <TypograhyStyle>{children}</TypograhyStyle>;
};

export default Typography;

import { LinkStyle } from "./style";
interface LinkProps {
  way: string;
  children: string | JSX.Element;
}
const Link: React.FC<LinkProps> = ({ way, children }) => {
  return <LinkStyle to={way}>{children}</LinkStyle>;
};

export default Link;

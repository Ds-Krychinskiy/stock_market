import { RefStyle } from "./style";
interface RefProps {
  href: string;
  children: string;
  target: string;
}
const Ref: React.FC<RefProps> = ({ children, href, target }) => {
  return (
    <RefStyle href={href} target={target}>
      {children}
    </RefStyle>
  );
};

export default Ref;

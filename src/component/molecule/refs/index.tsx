import Ref from "../../atoms/ref";
interface RefsProps {
  children: string;
  href: string;
  target: string;
}
const Refs: React.FC<RefsProps> = ({ children, href, target }) => {
  return (
    <Ref href={href} target={target}>
      {children}
    </Ref>
  );
};

export default Refs;

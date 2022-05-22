import { ButtonStyle } from "./style";
interface ButtonProps {
  children: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;

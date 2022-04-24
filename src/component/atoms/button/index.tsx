import { ButtonStyle } from "./style";
interface ButtonProps {
  // children: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <ButtonStyle onClick={onClick}></ButtonStyle>;
};

export default Button;

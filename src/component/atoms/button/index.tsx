import { ButtonStyle, ButtonChart } from "./style";
interface ButtonProps {
  children: string;
  onClick: () => void;
  variant: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, children, variant }) => {
  switch(variant){
    case "search": return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
    case "chart": return <ButtonChart onClick={onClick}>{children}</ButtonChart>
    default: return <button></button>
  }
};

export default Button;

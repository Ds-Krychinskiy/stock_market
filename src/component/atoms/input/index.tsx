import { InputStyle } from "./style";
interface InputProps {
  value: string;
  placeholder: string;
  onChange: (name: string) => void;
}
const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <InputStyle
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;

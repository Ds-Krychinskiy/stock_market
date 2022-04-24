import { InputStyle } from "./style";
interface InputProps {
  value: string;
  label: string;
  onChange: (name: string) => void;
}
const Input: React.FC<InputProps> = ({ value, label, onChange }) => {
  return (
    <InputStyle
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
    ></InputStyle>
  );
};

export default Input;

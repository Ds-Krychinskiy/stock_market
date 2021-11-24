import React from "react";
import { InputStyle } from "./style";

interface IInputProps {
  value: string;
  setValue: (name: string) => void;
}

const Input: React.FC<IInputProps> = ({ value, setValue }) => {
  return (
    <InputStyle
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></InputStyle>
  );
};
export default Input;

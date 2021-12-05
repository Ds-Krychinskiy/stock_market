import React, { useState } from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { InputMoleculeStyle } from "./style";

interface IInputProps {
  setTiker: (name: string) => void;
}

const InputMolecule: React.FC<IInputProps> = ({ setTiker }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    setTiker(value);
    setValue("");
  };

  return (
    <InputMoleculeStyle>
      <Input value={value} setValue={setValue} />
      <Button onClick={onClick} />
    </InputMoleculeStyle>
  );
};

export default InputMolecule;

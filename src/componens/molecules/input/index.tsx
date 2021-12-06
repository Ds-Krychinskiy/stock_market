import React, { useState } from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import Typography from "../../atoms/typography";
import { InputMoleculeStyle, InputWrapper } from "./style";

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
<InputWrapper>
    <InputMoleculeStyle>
      <Input value={value} setValue={setValue} />
      <Button onClick={onClick}><Typography>Save</Typography></Button>
    </InputMoleculeStyle>
    </InputWrapper>
  );
};

export default InputMolecule;

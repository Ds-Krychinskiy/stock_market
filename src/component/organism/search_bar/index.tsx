import React from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";

interface SearchBarProps {
  valueInput: string;
  onClick: (value: string) => void;
  setValueInput: (name: string) => void;
}

const SeatchBar: React.FC<SearchBarProps> = ({
  valueInput,
  setValueInput,
  onClick,
}) => {
  return (
    <>
      <Input
        value={valueInput}
        placeholder={"Enter company ticker..."}
        onChange={setValueInput}
      />
      <Button onClick={() => onClick(valueInput)} children={"Search..."} />
    </>
  );
};

export default SeatchBar;

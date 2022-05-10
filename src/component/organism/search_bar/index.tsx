import React from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { SearchBarStyle } from "./style";

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
    <SearchBarStyle>
      <Input
        value={valueInput}
        placeholder={"Enter company ticker..."}
        onChange={setValueInput}
      />
      <Button variant={"search"} onClick={() => onClick(valueInput)} children={"Search..."} />
    </SearchBarStyle>
  );
};

export default SeatchBar;

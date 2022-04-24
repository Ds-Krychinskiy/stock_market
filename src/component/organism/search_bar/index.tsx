import React from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { StateProps } from "../../pages/stock_screener";
import Drop from "../drop_down_list/index";
import { SearchBarStyle } from "./style";

interface SearchBarProps {
  state: StateProps;
  valueInput: string;
  onClick: () => void;
  setValueInput: (name: string) => void;
  getValueFromDropdownList: (value: string | number, field: string) => void;
}

const SeatchBar: React.FC<SearchBarProps> = ({
  state,
  valueInput,
  getValueFromDropdownList,
  setValueInput,
  onClick,
}) => {
  return (
    <SearchBarStyle>
      <Input
        value={valueInput}
        label={"Enter company ticker..."}
        onChange={setValueInput}
      ></Input>
      <Drop state={state} onChange={getValueFromDropdownList}></Drop>
      <Button onClick={() => onClick()} />
    </SearchBarStyle>
  );
};

export default SeatchBar;

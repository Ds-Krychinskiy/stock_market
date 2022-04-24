import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { NumberList, StringList } from "../../../list";

interface DropDownListProps {
  list: StringList[] | NumberList[];
  name: string;
  state: string | number;
  onChange: (value: string | number) => void;
}

const DropDown: React.FC<DropDownListProps> = ({ ...props }) => {
  const { list, state, onChange, name } = props;

  const handelChange = (e: SelectChangeEvent<string | number>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <InputLabel>{name}</InputLabel>
      <Select value={state} onChange={handelChange}>
        {list.map((el) => (
          <MenuItem key={el.key} value={el.key}>
            {el.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDown;

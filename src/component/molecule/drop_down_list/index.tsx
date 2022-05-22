import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { NumberList, StringList } from "../../../list";
import { Typography } from "../../atoms/typograhy";

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
    <>
      <InputLabel>
        <Typography size={"1.2em"}>{name}</Typography>
      </InputLabel>
      <Select value={state} onChange={handelChange}>
        {list.map((el) => (
          <MenuItem key={el.key} value={el.key}>
            <Typography size={"1.2em"}>{el.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default DropDown;

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { NumberList, StringList } from "../../../list";
import { Typography } from "../../atoms/typograhy";
import { DropWrapperStyle } from "./style";
import InputLabel from "@mui/material/InputLabel";

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
    <DropWrapperStyle>
      <InputLabel>
        <Typography size={"1em"}>{name}</Typography>
      </InputLabel>
      <Select value={state} onChange={handelChange}>
        {list.map((el) => (
          <MenuItem key={el.key} value={el.key}>
            <p style={{ color: "red" }}>{el.label}</p>
          </MenuItem>
        ))}
      </Select>
    </DropWrapperStyle>
  );
};

export default DropDown;

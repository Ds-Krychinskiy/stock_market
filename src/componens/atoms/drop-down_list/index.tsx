import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { IStringList, INumberList } from "../../../list";

interface IDropDownListProps {
  list: IStringList[] | INumberList[];
  name: string;
  id: string;
  state: string | number;
  onChange: (value: string | number) => void;
}

const DropDownList: React.FC<IDropDownListProps> = ({ ...props }) => {
  const { list, name, id, state, onChange } = props;

  const handelChange = (e: SelectChangeEvent<string | number>) => {
    onChange(e.target.value);
    console.log(state);
  };

  return (
    <div>
      <InputLabel id={id}>{name}</InputLabel>
      <Select labelId={id} value={state} onChange={handelChange}>
        <MenuItem>
          <em></em>
        </MenuItem>
        {list.map((el) => (
          <MenuItem key={el.key} value={el.key}>
            {el.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDownList;

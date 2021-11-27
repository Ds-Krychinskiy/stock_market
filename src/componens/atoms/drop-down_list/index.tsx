import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { ISector, IListCountry } from "../../../list";

interface IDropDownListProps {
  list: ISector[] | IListCountry[];
  name: string;
  id: string;
  state: string;
  onChange: (value: string) => void;
}

const DropDownList: React.FC<IDropDownListProps> = ({ ...props }) => {
  const { list, name, id, state, onChange } = props;

  const handelChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value);
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

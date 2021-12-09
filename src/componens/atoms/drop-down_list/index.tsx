import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { IStringList, INumberList } from "../../../list";
import { DropDownListWrapper } from "./style";

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
    <DropDownListWrapper>
      <InputLabel sx={{color: "#f26b38"}} id={id}>{name}</InputLabel>
      <Select sx={{color: "#f26b38", border: "1px solid #f26b38"}} labelId={id} value={state} onChange={handelChange}>
        <MenuItem sx={{color: "#f26b38"}}>
          <em></em>
        </MenuItem>
        {list.map((el) => (
          <MenuItem sx={{color: "#f26b38", backgroundColor: "black"}} key={el.key} value={el.key}>
            {el.label}
          </MenuItem>
        ))}
      </Select>
    </DropDownListWrapper>
  );
};

export default DropDownList;

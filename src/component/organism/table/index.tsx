import React from "react";
import { TableStyle } from "./style";
interface TableProps {
  state: () => JSX.Element;
  onClick: (name: string) => void;
}

const Table: React.FC<TableProps> = ({ state }) => {
  return <TableStyle>{state()}</TableStyle>;
};

export default Table;

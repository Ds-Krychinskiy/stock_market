import React from "react";
import { OneCompanyProps } from "../../../interface";
import { TableStyle } from "./style";

interface TableProps {
  state: OneCompanyProps[];
}

const Table: React.FC<TableProps> = ({ state }) => {
  return (
    <TableStyle>
      {state.map((el: OneCompanyProps) => (
        <div key={el.name}>
          <p>{el.symbol}</p>
        </div>
      )
      )}
    </TableStyle>
  );
};

export default Table;

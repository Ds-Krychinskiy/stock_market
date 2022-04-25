import React from "react";
import { OneCompanyProps } from "../../../interface";
import { ElementWrapper, TableStyle } from "./style";
interface TableProps {
  state: OneCompanyProps[];
  onClick: (name: string) => void;
}

const Table: React.FC<TableProps> = ({ state, onClick }) => {
  return (
    <TableStyle>
      {state.map((el: OneCompanyProps) => (
        <ElementWrapper key={el.name} onClick={()=> onClick(el.name)}>
            <p>{el.symbol}</p>
            <p>{el.name}</p>
            <p>{el.stockExchange}</p>
        </ElementWrapper>
      ))}
    </TableStyle>
  );
};

export default Table;

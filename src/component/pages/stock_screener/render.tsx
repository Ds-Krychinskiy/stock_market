import { OneCompanyProps } from "../../../state/Stock_Screener_State/interface";
import { Typography } from "../../atoms/typograhy";
import TableCell from "@mui/material/TableCell";
import { ElementWrapper } from "../../organism/table/style";

export const renderOneCompany = (
  state: OneCompanyProps[],
  onClick: (name: string) => void
) => (
  <>
    {state.length > 0 ? (
      state.map((el: OneCompanyProps) => (
        <ElementWrapper key={el.name} onClick={() => onClick(el.name)}>
          <TableCell>
            <Typography size={"1.2em"}>{el.symbol}</Typography>
          </TableCell>
          <TableCell>
            <Typography size={"1.2em"}>{el.name}</Typography>
          </TableCell>
          <TableCell>
            <Typography size={"1.2em"}>{el.stockExchange}</Typography>
          </TableCell>
        </ElementWrapper>
      ))
    ) : (
      <ElementWrapper>
        <Typography size={"1.2em"}>Введите тикер компании...</Typography>
      </ElementWrapper>
    )}
  </>
);

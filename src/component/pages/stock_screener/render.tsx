import { OneCompanyProps } from "../../../state/Stock_Screener_State/interface";
import Typography from "../../atoms/typograhy";
import { ElementWrapper } from "../../organism/table/style";

export const renderOneCompany = (
  state: OneCompanyProps[],
  onClick: (name: string) => void
) => (
  <>
    {state.map((el: OneCompanyProps) => (
      <ElementWrapper key={el.name} onClick={() => onClick(el.name)}>
        <Typography variant={""}>{el.symbol}</Typography>
        <Typography variant={""}>{el.name}</Typography>
        <Typography variant={""}>{el.stockExchange}</Typography>
      </ElementWrapper>
    ))}
  </>
);

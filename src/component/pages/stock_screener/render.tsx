import { OneCompanyProps } from "../../../state/Stock_Screener_State/interface";
import { ElementWrapper } from "../../organism/table/style";

export const renderOneCompany = (
  state: OneCompanyProps[],
  onClick: (name: string) => void
) => (
  <>
    {state.map((el: OneCompanyProps) => (
      <ElementWrapper key={el.name} onClick={() => onClick(el.name)}>
        <p>{el.symbol}</p>
        <p>{el.name}</p>
        <p>{el.stockExchange}</p>
      </ElementWrapper>
    ))}
  </>
);

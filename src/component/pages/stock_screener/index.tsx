import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

import Table from "../../organism/table";
import { ScreenerWrapper } from "./style";
import { CompanyRoute, StockScreenerRoute } from "../../../consts";
import { renderOneCompany } from "./render";
import Stock_Screener_State from "../../../state/Stock_Screener_State";

const StockScreener = observer(() => {
  const navigate = useNavigate();
  const GoToCompanyPage = (way: string) => {
    navigate(`/${StockScreenerRoute}${CompanyRoute}/${way}`);
  };
  const { oneCompany } = Stock_Screener_State;
  return (
    <ScreenerWrapper>
      <Table
        state={() => renderOneCompany(oneCompany, GoToCompanyPage)}
        list={oneCompany}
      />
    </ScreenerWrapper>
  );
});

export default StockScreener;

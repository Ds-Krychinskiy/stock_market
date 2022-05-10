import { useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

import Stock_Screener_State from "../../../state/Stock_Screener_State";
import { StateProps } from "../../../state/Stock_Screener_State/interface";

import BasicModal from "../../organism/modal";
import Table from "../../organism/table";
import { ScreenerWrapper } from "./style";
import { CompanyRoute } from "../../../consts";
import { renderOneCompany } from "./render";

const CreateState = {
  sector: "",
  services: "",
  industry: "",
  country: "",
  exchange: "",
  marketCap: 0,
  dividend: 0,
  tradingVolume: 0,
  beta: 0,
};

const StockScreener = observer(() => {
  const [listProps, setListProps] = useState<StateProps>(CreateState);
  const { oneCompany } = Stock_Screener_State;

  const navigate = useNavigate();

  const GoToCompanyPage = (way: string) => {
    navigate(`/${CompanyRoute}/${way}`);
  };

  const getValueFromDropdownList = useCallback(
    (value: string | number, field: string) => {
      setListProps((_state) => ({ ..._state, [field]: value }));
    },
    []
  );

  return (
    <ScreenerWrapper>
      <BasicModal
        state={listProps}
        getValueFromDropdownList={getValueFromDropdownList}
      />

      <Table
        state={() => renderOneCompany(oneCompany, GoToCompanyPage)}
        onClick={GoToCompanyPage}
      />
    </ScreenerWrapper>
  );
});

export default StockScreener;

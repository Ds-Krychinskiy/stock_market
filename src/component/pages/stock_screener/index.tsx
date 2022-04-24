import { useHistory } from "react-router";
import { useState } from "react";
import { useCallback } from "react";
import axios from "axios";
import Stock_Screener_State from "../../../state/Stock_Screener_State";
import SeatchBar from "../../organism/search_bar";
import Table from "../../organism/table";
import { ScreenerWrapper } from "./style";
import { observer } from "mobx-react-lite";

export interface StateProps {
  sector: string;
  services: string;
  industry: string;
  country: string;
  exchange: string;
  marketCap: number;
  tradingVolume: number;
  dividend: number;
  beta: number;
}

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
  const [valueInput, setValueInput] = useState("");
  const [listProps, setListProps] = useState<StateProps>(CreateState);
  const { companies, oneCompany, getOneOfCompany, getListOfCompanies } =
    Stock_Screener_State;

  const history = useHistory();

  const GoToCompanyPage = (way: string) => {
    history.push(way);
  };

  const getValueFromDropdownList = useCallback(
    (value: string | number, field: string) => {
      setListProps((_state) => ({ ..._state, [field]: value }));
    },
    []
  );

  const getListCompany = async () => {
    try {
      const state = await axios.get(
        "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=e2dc68a4357331f2d4385f9312fbbade"
      );
      getListOfCompanies(state.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneCompany = async () => {
    try {
      const state = await axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${valueInput}&apikey=e2dc68a4357331f2d4385f9312fbbade`
      );
      getOneOfCompany(state.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompany = () => {
    if (Boolean(valueInput) === true) {
      return getOneCompany();
    } else {
      return getListCompany();
    }
  };

  return (
    <ScreenerWrapper>
      <SeatchBar
        state={listProps}
        valueInput={valueInput}
        getValueFromDropdownList={getValueFromDropdownList}
        setValueInput={setValueInput}
        onClick={fetchCompany}
      />
      <Table state={oneCompany}></Table>
    </ScreenerWrapper>
  );
});

export default StockScreener;

import { useState } from "react";
import axios from "../../axios";
import { Route, Switch } from "react-router";



// import Path from "../../links";
import InputStock from "./InputStock";
import Links from "./Links";
import CompanyFinancial from "./сomponens/CompanyFinancial";
import SecFilings from "./сomponens/SecFilings";
import CompanyProfile from "./сomponens/CompanyPR";
import CompanyFS from "./сomponens/CompanyFS";

interface ITSStocks {
  symbol: string;
  companyName: string;
  price: number;
  sector: string;
  state: string;
  city: string;
  ceo: string;
  description: string;
  website: string;
  exchange: string;

  peRatioTTM: number;
  pegRatioTTM: number;
  payoutRatioTTM: number;
  currentRatioTTM: number;
  quickRatioTTM: number;
  daysOfInventoryOutstandingTTM: number;
  operatingCycleTTM: number;
  GrossProfitMarginTTM: number;
  OperatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;
}

const TSStocks = () => {
  const [tiker, setTiker] = useState("");

  const [stocks, setStocks] = useState<ITSStocks[]>([]);

  // const f = () => {
  //   history.push("/stock_market/company_financial_ratios");
  // }

  const onAdd = (value: string) => {
    axios
      .get(`ratios-ttm/${value}`)
      .then((response) => setStocks(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });

    axios
      .get(`ratios-ttm/${value}`)
      .then((response) => setStocks(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });

    axios
      .get(`ratios-ttm/${value}`)
      .then((response) => setStocks(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });

    setTiker(value);
  };

  return (
    <>
      <InputStock onAdd={onAdd} />
      <Links />
      <Switch>
        <Route path="/stock_market/sec_filings">
          <CompanyFinancial stocks={stocks} />
        </Route>
        <Route path="/stock_market/sec_filings">
          <SecFilings />
        </Route>
        <Route path="/stock_market/company_profile">
          <CompanyProfile />
        </Route>
        <Route path="/stock_market/company_financial_statements">
          <CompanyFS />
        </Route>
      </Switch>
    </>
  );
};
export default TSStocks;

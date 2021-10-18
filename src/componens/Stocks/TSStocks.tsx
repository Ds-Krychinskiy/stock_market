import { useState } from "react";
import axios from "../../axios";
import { Route, Switch } from "react-router";
import styled from "styled-components";

import InputStock from "./InputStock";
import Links from "./Links";
import CompanyFinancial from "./сomponents/CompanyFinancial";
import SecFilings from "./сomponents/SecFilings";
import CompanyProfile from "./сomponents/CompanyPR";
import CompanyFS from "./сomponents/CompanyFS";
import StockNews from "./сomponents/StockNews";
import KeyExecutives from "./сomponents/KeyExecutives";
import StockCompaniesPrice from "./сomponents/StockCompaniesPrice";

import * as routes from "../../routes";
import StockScreener from "../StockScreener/StockScreener";

const InputStyles = styled.div`
  display: flex;
  justify-content: center;
`;

interface ITSStocks {
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
  dividendYielTTM: number;
  cashRatioTTM: number;
  daysOfSalesOutstandingTTM: number;
  daysOfPayablesOutstandingTTM: number;
  cashConversionCycleTTM: number;
  grossProfitMarginTTM: number;
  operatingProfitMarginTTM: number;
  effectiveTaxRateTTM: number;
  netIncomePerEBTTTM: number;
  ebtPerEbitTTM: number;
  debtRatioTTM: number;
  longTermDebtToCapitalizationTTM: number;
  totalDebtToCapitalizationTTM: number;
  interestCoverageTTM: number;
  cashFlowToDebtRatioTTM: number;
  companyEquityMultiplierTTM: number;
  receivablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  fixedAssetTurnoverTTM: number;
  assetTurnoverTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  operatingCashFlowSalesRatioTTM: number;
  freeCashFlowOperatingCashFlowRatioTTM: number;
  cashFlowCoverageRatiosTTM: number;
  priceBookValueRatioTTM: number;
  priceToSalesRatioTTM: number;
  priceToFreeCashFlowsRatioTTM: number;
  dividendYieldTTM: number;
  enterpriseValueMultipleTTM: number;
  priceFairValueTTM: number;
  dividendPerShareTTM: number;
}

const TSStocks = () => {
  const [tiker, setTiker] = useState("");

  const [stocks, setStocks] = useState<ITSStocks[]>([]);

  const onAdd = (value: string) => {
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
      <InputStyles>
        <InputStock onAdd={onAdd} />
      </InputStyles>
      <Links />
      <Switch>
        <Route path={`/${routes.StockMarket}/${routes.FinancialIndicators}`}>
          <CompanyFinancial tiker={tiker} stocks={stocks} />
        </Route>

        <Route path={`/${routes.StockMarket}/${routes.SecFilings}`}>
          <SecFilings tiker={tiker} />
        </Route>

        <Route path={`/${routes.StockMarket}/${routes.CompanyProfile}`}>
          <CompanyProfile tiker={tiker} />
        </Route>

        <Route
          path={`/${routes.StockMarket}/${routes.CompanyFinancialStatements}`}
        >
          <CompanyFS tiker={tiker} />
        </Route>

        <Route path={`/${routes.StockMarket}/${routes.StockNews}`}>
          <StockNews tiker={tiker} />
        </Route>

        <Route path={`/${routes.StockMarket}/${routes.KeyExecutives}`}>
          <KeyExecutives tiker={tiker} />
        </Route>

        <Route path={`/${routes.StockMarket}/${routes.StockCompaniesPrice}`}>
          <StockCompaniesPrice tiker={tiker} />
        </Route>
      </Switch>
    </>
  );
};
export default TSStocks;

import React, { useState } from "react";
import { Route, Switch } from "react-router";
import InputMolecule from "../../molecules/input";

import CompanyFR from "../../organisms/table/componens/Stock_market/Companu_Financial_Rations";

import TabsBar from "../../organisms/tabs-bar";

import * as routes from "../../../routes";
import CompanyFS from "../../organisms/table/componens/Stock_market/Company_Financial_Statements";
import CompanyProfile from "../../organisms/table/componens/Stock_market/Company_Profile";
import KeyExecutives from "../../organisms/table/componens/Stock_market/Key_Executives";
import StockCP from "../../organisms/table/componens/Stock_market/Stock_Companies_Price";
import SecFilings from "../../organisms/table/componens/Stock_market/SEC_Filings";
import StockNews from "../../organisms/table/componens/Stock_market/Stock_News";

const StockMarket = () => {
  const [tiker, setTiker] = useState("");
  return (
    <>
      <InputMolecule setTiker={setTiker}/>
      <TabsBar variant={"stock"} />
      <Switch>
        <Route path={`/${routes.StockMarket}/${routes.FinancialIndicators}`}>
          <CompanyFR tiker={tiker}/>
        </Route>
        <Route
          path={`/${routes.StockMarket}/${routes.CompanyFinancialStatements}`}
        >
          <CompanyFS />
        </Route>
        <Route path={`/${routes.StockMarket}/${routes.CompanyProfile}`}>
          <CompanyProfile />
        </Route>
        <Route path={`/${routes.StockMarket}/${routes.KeyExecutives}`}>
          <KeyExecutives />
        </Route>
        <Route path={`/${routes.StockMarket}/${routes.SecFilings}`}>
          <SecFilings />
        </Route>
        <Route path={`/${routes.StockMarket}/${routes.StockCompaniesPrice}`}>
          <StockCP />
        </Route>
        <Route path={`/${routes.StockMarket}/${routes.StockNews}`}>
          <StockNews />
        </Route>
      </Switch>
    </>
  );
};

export default StockMarket;

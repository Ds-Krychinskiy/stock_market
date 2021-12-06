import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import { useHistory, useLocation } from "react-router";

import TabsComponent from "../../../../atoms/tabs";
import { TabsBarStyle } from "./../../style";

import {
  FinancialIndicators,
  StockNews,
  SecFilings,
  KeyExecutives,
  CompanyProfile,
  StockCompaniesPrice,
  CompanyFinancialStatements,
} from "../../../../../routes";

interface IStockMarketProps {}

const StockMarket: React.FC<IStockMarketProps> = () => {
  const [selectedTab, setSelectedTab] = useState(FinancialIndicators);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const goToTheCompanyFR = () => {
    history.push(FinancialIndicators);
  };

  const goToTheStockNews = () => {
    history.push(StockNews);
  };
  const goToTheSecFilings = () => {
    history.push(SecFilings);
  };
  const goToTheKeyExecutives = () => {
    history.push(KeyExecutives);
  };
  const goToTheCompanyProfile = () => {
    history.push(CompanyProfile);
  };
  const goToTheCompanyFinancialStatements = () => {
    history.push(CompanyFinancialStatements);
  };
  const goToTheStockCompaniesPrice = () => {
    history.push(StockCompaniesPrice);
  };

  return (
    <TabsBarStyle>
      <Tabs sx={{color: "#f26b38"}} value={selectedTab} aria-label="simple tabs example">
        <TabsComponent

          value={FinancialIndicators}
          onClick={() => goToTheCompanyFR()}
          label={"Company Financial Ratios"}
        />
        <TabsComponent
          value={StockNews}
          onClick={() => goToTheStockNews()}
          label={"Stock News"}
        />
        <TabsComponent
          value={SecFilings}
          onClick={() => goToTheSecFilings()}
          label={"SEC Filings"}
        />
        <TabsComponent
          value={KeyExecutives}
          onClick={() => goToTheKeyExecutives()}
          label={"Key Executives"}
        />
        <TabsComponent
          value={CompanyProfile}
          onClick={() => goToTheCompanyProfile()}
          label={"Company Profile"}
        />
        <TabsComponent
          value={CompanyFinancialStatements}
          onClick={() => goToTheCompanyFinancialStatements()}
          label={"Company Financial Statements"}
        />
        <TabsComponent
          value={StockCompaniesPrice}
          onClick={() => goToTheStockCompaniesPrice()}
          label={"Stock Companies Price"}
        />
      </Tabs>
    </TabsBarStyle>
  );
};

export default StockMarket;

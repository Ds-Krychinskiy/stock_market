import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router";
import {
  FinancialIndicators,
  StockNews,
  SecFilings,
  KeyExecutives,
  CompanyProfile,
  CompanyFinancialStatements,
  StockCompaniesPrice,
} from "../../routes";
import { useState, useEffect } from "react";

interface ILinksProps {}

const Links: React.FC<ILinksProps> = () => {
  const [selectedTab, setSelectedTab] = useState(FinancialIndicators);
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const history = useHistory();

  const goToTheFinancialIndicators = () => {
    history.push(FinancialIndicators);
  };
  const goToStockNews = () => {
    history.push(StockNews);
  };
  const goToSecFilings = () => {
    history.push(SecFilings);
  };
  const goToKeyExecutives = () => {
    history.push(KeyExecutives);
  };
  const goToCompanyProfile = () => {
    history.push(CompanyProfile);
  };
  const goToCompanyFinancialStatements = () => {
    history.push(CompanyFinancialStatements);
  };
  const goToStockCompaniesPrice = () => {
    history.push(StockCompaniesPrice);
  };

  return (
    <div>
      <Tabs value={selectedTab} aria-label="simple tabs example">
        <Tab
          value={FinancialIndicators}
          onClick={goToTheFinancialIndicators}
          label="Company Financial Ratios!"
        />
        <Tab value={StockNews} onClick={goToStockNews} label="Stock News" />
        <Tab value={SecFilings} onClick={goToSecFilings} label="SEC Filings!" />
        <Tab
          value={KeyExecutives}
          onClick={goToKeyExecutives}
          label="Key Executives"
        />
        <Tab
          value={CompanyProfile}
          onClick={goToCompanyProfile}
          label="Company Profile!"
        />
        <Tab
          value={CompanyFinancialStatements}
          onClick={goToCompanyFinancialStatements}
          label="Company Financial Statements!"
        />
        <Tab
          value={StockCompaniesPrice}
          onClick={goToStockCompaniesPrice}
          label="Stock Companies Price"
        />
      </Tabs>
    </div>
  );
};
export default Links;

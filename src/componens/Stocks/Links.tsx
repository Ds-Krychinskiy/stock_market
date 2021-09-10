import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router";

interface ILinksProps {}

const Links: React.FC<ILinksProps> = () => {
  const history = useHistory();
  const goToTheFinancialIndicators = () => {
    history.push("/stock_market/company_financial_ratios");
  };
  const goToStockNews = () => {
    history.push("/stock_market/stock_news");
  };
  const goToSecFilings = () => {
    history.push("/stock_market/sec_filings");
  };
  const goToKeyExecutives = () => {
    history.push("/stock_market/key_executives");
  };
  const goToCompanyProfile = () => {
    history.push("/stock_market/company_profile");
  };
  const goToCompanyFinancialStatements = () => {
    history.push("/stock_market/company_financial_statements");
  };
  const goToStockCompaniesPrice = () => {
    history.push("/stock_market/companies_price");
  };

  return (
    <div>
      <Tabs aria-label="simple tabs example">
        <Tab
          value={0}
          onClick={goToTheFinancialIndicators}
          label="Company Financial Ratios!"
        />
        <Tab value={1} onClick={goToStockNews} label="Stock News" />
        <Tab value={2} onClick={goToSecFilings} label="SEC Filings!" />
        <Tab value={3} onClick={goToKeyExecutives} label="Key Executives" />
        <Tab value={4} onClick={goToCompanyProfile} label="Company Profile!" />
        <Tab
          value={5}
          onClick={goToCompanyFinancialStatements}
          label="Company Financial Statements!"
        />
        <Tab
          value={6}
          onClick={goToStockCompaniesPrice}
          label="Batch Request Stock Companies Price"
        />
      </Tabs>
    </div>
  );
};
export default Links;

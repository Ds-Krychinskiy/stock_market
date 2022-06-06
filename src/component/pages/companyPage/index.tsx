import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { useEffect } from "react";
import Stock_Market_State from "../../../state/Stock_Market_State";
import Stock_Screener_State from "../../../state/Stock_Screener_State";
import TemplateChart from "../../temlates/companyPage";
import { renderAccordion } from "./render";

const CompanyPage = observer(() => {
  const {
    price,
    getCompanyNews,
    getMultipliers,
    getPriceForChart,
    getPriceForChartForTheMonth,

  } = Stock_Market_State;

  const { oneCompany } = Stock_Screener_State;

  useEffect(() => {
    getMultipliers();
    getPriceForChart("5min", 288);
    getCompanyNews();
  }, [oneCompany]);

  const fetchMultipliers = useCallback(() => {
    return renderAccordion()
  }, [oneCompany])

  return (
    <>
      <TemplateChart
        price={price}
        getPriceForChart={getPriceForChart}
        getPriceForChartForTheMonth={getPriceForChartForTheMonth}
        children={fetchMultipliers()}
      />
    </>
  );
});

export default CompanyPage;

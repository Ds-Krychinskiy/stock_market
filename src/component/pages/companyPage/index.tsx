import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Stock_Market_State from "../../../state/Stock_Market_State";
import Stock_Screener_State from "../../../state/Stock_Screener_State";
import TemplateChart from "../../temlates/companyPage";
// import { renderAccordion } from "./render";
// import { HeaderWrapper, MultipliersWrapper } from "./style";
// import { PriceAtTheMomentProps } from "../../../state/Stock_Market_State/interface";

const CompanyPage = observer(() => {
  const {
    price,
    price_at_the_moment,
    getPriceCompanyInRealTime,
    getCompanyNews,
    getMultipliers,
    getPriceForChart,
    getPriceForChartForTheMonth,
  } = Stock_Market_State;

  const { oneCompany } = Stock_Screener_State;

  useEffect(() => {
    getMultipliers();
    getPriceForChart("5min", 288);
    getPriceCompanyInRealTime();
    getCompanyNews();
  }, [oneCompany]);

  return (
    <>
      {/* {price_at_the_moment.map((e: PriceAtTheMomentProps) => (
        <HeaderWrapper key={e.symbol}>
          <Typography size={"1.2em"}>{e.symbol}</Typography>
          <Typography size={"1.2em"}>{e.price}</Typography>
        </HeaderWrapper>
      ))} */}
      <TemplateChart
        price={price}
        getPriceForChart={getPriceForChart}
        getPriceForChartForTheMonth={getPriceForChartForTheMonth}
      />
      {/* <MultipliersWrapper>{renderAccordion()}</MultipliersWrapper> */}{" "}
    </>
  );
});

export default CompanyPage;

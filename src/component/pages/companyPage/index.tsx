import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Stock_Market_State from "../../../state/Stock_Market_State";
import { PriceAtTheMomentProps } from "../../../state/Stock_Market_State/interface";
import Typography from "../../atoms/typograhy";
import DoughnutChart from "../../organism/charts";
import { renderAccordion } from "./render";
import { CompanyPageWrapper, HeaderWrapper, MultipliersWrapper } from "./style";

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
  useEffect(() => {
    getMultipliers();
    getPriceForChart("5min");
    getPriceCompanyInRealTime();
    getCompanyNews();
  }, []);

  const resultPrice = price
    .filter((el) => el.date && el.open && el.volume)
    .reverse();
  return (
    <CompanyPageWrapper>
      {price_at_the_moment.map((e: PriceAtTheMomentProps) => (
        <HeaderWrapper key={e.symbol}>
          <Typography variant={"h2"}>{e.symbol}</Typography>
          <Typography variant={"h2"}>{e.price}</Typography>
        </HeaderWrapper>
      ))}
      <DoughnutChart
        price={resultPrice}
        getPriceForChart={getPriceForChart}
        getPriceForChartForTheMonth={getPriceForChartForTheMonth}
      />
      <MultipliersWrapper>{renderAccordion()}</MultipliersWrapper>
    </CompanyPageWrapper>
  );
});

export default CompanyPage;

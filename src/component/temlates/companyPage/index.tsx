import React from "react";
import { PriceProps } from "../../../state/Stock_Market_State/interface";
import DoughnutChart from "../../organism/charts";
import { TemplateChartStyle } from "./style";

interface TemplateChartProps {
  price: PriceProps[];
  getPriceForChart: (time: string, count: number) => void;
  getPriceForChartForTheMonth: (count: number) => void;
}

const TemplateChart: React.FC<TemplateChartProps> = ({
  price,
  getPriceForChart,
  getPriceForChartForTheMonth,
}) => {
  return (
    <TemplateChartStyle>
      <DoughnutChart
        price={price}
        getPriceForChart={getPriceForChart}
        getPriceForChartForTheMonth={getPriceForChartForTheMonth}
      />
    </TemplateChartStyle>
  );
};

export default TemplateChart;

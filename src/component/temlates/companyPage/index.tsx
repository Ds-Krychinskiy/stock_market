import React from "react";
import { PriceProps } from "../../../state/Stock_Market_State/interface";
import DoughnutChart from "../../organism/charts";
import { TemplateChartStyle } from "./style";
import LazyComponent from "../../../hoc/lazyComponent";
import { memo } from "react";
interface TemplateChartProps {
  price: PriceProps[];
  getPriceForChart: (time: string, count: number) => void;
  getPriceForChartForTheMonth: (count: number) => void;
  children?:  JSX.Element;
}

const TemplateChart: React.FC<TemplateChartProps> = ({
  price,
  getPriceForChart,
  getPriceForChartForTheMonth,
  children,
}) => {
  return (
    <TemplateChartStyle>
      <LazyComponent
        Component={
          <>
            <DoughnutChart
              price={price}
              getPriceForChart={getPriceForChart}
              getPriceForChartForTheMonth={getPriceForChartForTheMonth}
            />
            {children}
          </>
        }
      />
    </TemplateChartStyle>
  );
};

export default memo(TemplateChart);

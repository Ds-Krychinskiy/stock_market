import { parseISO, format } from "date-fns";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import Button from "../../atoms/button";
import { ButtonWrapp, RechartsStyle, Wrapp } from "./style";
import Curcular from "../../atoms/circular/index";
import { PriceProps } from "../../../state/Stock_Market_State/interface";

interface ChartProps {
  price: PriceProps[];
  getPriceForChart: (time: string, count: number) => void;
  getPriceForChartForTheMonth: (count: number) => void;
}

const DoughnutChart: React.FC<ChartProps> = ({
  price,
  getPriceForChart,
  getPriceForChartForTheMonth,
}) => {
  return (
    <>
      <ButtonWrapp>
        <Button onClick={() => getPriceForChart("5min", 110)} children={"1D"} />
        <Button onClick={() => getPriceForChart("30min", 55)} children={"5D"} />
        <Button
          onClick={() => getPriceForChartForTheMonth(20)}
          children={"1M"}
        />
        <Button
          onClick={() => getPriceForChartForTheMonth(120)}
          children={"6M"}
        />
        <Button
          onClick={() => getPriceForChartForTheMonth(260)}
          children={"Y"}
        />
        <Button
          onClick={() => getPriceForChartForTheMonth(1800)}
          children={"5Y"}
        />
      </ButtonWrapp>
      <Wrapp>
        <RechartsStyle height={400}>
          <AreaChart data={price}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451b7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area dataKey="open" stroke="#2451b7" fill="url(#color)" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
            <YAxis
              dataKey="open"
              interval={2}
              axisLine={false}
              tickLine={false}
              tickCount={8}
              tickFormatter={(number) => `$${number.toFixed(2)}`}
            />
            <Tooltip />
          </AreaChart>
        </RechartsStyle>
        <RechartsStyle height={400}>
          <BarChart data={price}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
            <YAxis dataKey="volume" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="volume" fill="#2451b7" />
          </BarChart>
        </RechartsStyle>
      </Wrapp>
    </>
  );
};

export default DoughnutChart;

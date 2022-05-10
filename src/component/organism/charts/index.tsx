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

interface PriceProps {
  date: string;
  open: number;
}
interface ChartProps {
  price: PriceProps[];
  getPriceForChart: (time: string) => void;
  getPriceForChartForTheMonth: () => void;
}

const DoughnutChart: React.FC<ChartProps> = ({
  price,
  getPriceForChart,
  getPriceForChartForTheMonth,
}) => {
  return (
    <><ButtonWrapp>
        <Button variant={"chart"} onClick={() => getPriceForChart("5min")} children={"1D"} />
        <Button variant={"chart"} onClick={() => getPriceForChart("30min")} children={"5D"} />
        <Button variant={"chart"} onClick={() => getPriceForChartForTheMonth()} children={"1M"} />
        <Button variant={"chart"} onClick={() => getPriceForChartForTheMonth()} children={"6M"} />
        <Button variant={"chart"} onClick={() => getPriceForChartForTheMonth()} children={"Y"} />
        <Button variant={"chart"} onClick={() => getPriceForChartForTheMonth()} children={"5Y"} />
        </ButtonWrapp>
      <Wrapp>
        <RechartsStyle height={400}>
          <AreaChart data={price}>
            <defs>
              <linearGradient>
                <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451b7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area dataKey="open" stroke="#2451b7" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="open"
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
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
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

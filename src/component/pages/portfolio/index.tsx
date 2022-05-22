import Refs from "../../molecule/refs";
import { MInform } from "../../temlates/portfolio";
import { PortfolioStyle, ChartWrapp } from "./style";
import { StockScreenerRoute } from "../../../consts";
import { MTypography } from "../../atoms/typograhy/index";
import { textAnimation } from "../../../animation/TextAmination";
import Link from "../../molecule/link";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

interface DataProps {
  name: string;
  A: number;
  fullMark: number;
}
const Portfolio = () => {
  const data: DataProps[] = [
    { name: "MobX", A: 4, fullMark: 5 },
    { name: "React", A: 4, fullMark: 5 },
    { name: "Redux", A: 4, fullMark: 5 },
    { name: "JS", A: 4, fullMark: 5 },
    { name: "CSS", A: 3, fullMark: 5 },
    { name: "HTML", A: 3, fullMark: 5 },
  ];

  return (
    <PortfolioStyle>
      <MInform initial="hidden" whileInView="visible">
        <>
          <MTypography custom={1} variants={textAnimation} size={"3rem"}>
            Hello World!
          </MTypography>
          <MTypography custom={2} variants={textAnimation} size={"3em"}>
            My name is Denis
          </MTypography>
          <MTypography custom={3} variants={textAnimation} size={"3em"}>
            and this is my pet-project
          </MTypography>
          <ChartWrapp custom={5} variants={textAnimation}>
            <RadarChart outerRadius={90} width={400} height={250} data={data}>
              <PolarGrid stroke="#dcfa16" />
              <PolarAngleAxis dataKey="name" stroke="#dcfa16" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} stroke="#dcfa16" />
              <Radar
                name="My skills"
                dataKey="A"
                stroke="#2451b7"
                fill="#1c3778"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ChartWrapp>
          <MTypography custom={5} variants={textAnimation} size={"3em"}>
            Буду рад любому фидбеку!
          </MTypography>
          <Link way={`${StockScreenerRoute}`}>Okey, lets go</Link>
          <Refs href={"https://t.me/denis_krychinskiy"} target={"blank"}>
            Telegram
          </Refs>
        </>
      </MInform>
    </PortfolioStyle>
  );
};

export default Portfolio;

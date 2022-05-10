import Typograhy from "../../atoms/typograhy";
import Refs from "../../molecule/refs";
import Inform from "../../temlates/portfolio";
import { PortfolioStyle } from "./style";
import { Link } from "react-router-dom";
import { StockScreenerRoute } from "../../../consts";
const Portfolio = () => {
  return (
    <PortfolioStyle>
      <Inform>
        <>
          <Typograhy variant={"hello"}>Hello World!</Typograhy>
          <Typograhy variant={"hello"}>My name is Denis</Typograhy>
          <Typograhy variant={"hello"}>and this is my pet-project</Typograhy>
          <Typograhy variant={"hello"}>My skills:</Typograhy>
          <Typograhy variant={"hello"}>Буду рад любому фидбеку!</Typograhy>
          <Link to={`${StockScreenerRoute}`}>Okey, lets go</Link>
          <Refs href={"https://t.me/denis_krychinskiy"} target={"blank"}>
            Telegram
          </Refs>
        </>
      </Inform>
    </PortfolioStyle>
  );
};

export default Portfolio;

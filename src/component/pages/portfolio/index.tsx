import Button from "../../atoms/button";
import Typograhy from "../../atoms/typograhy";
import Refs from "../../molecule/refs";
import Inform from "../../temlates/portfolio";
import { PortfolioStyle } from "./style";

const Portfolio = () => {
  return (
    <PortfolioStyle>
      <Inform>
        <>
          <Typograhy>Hello World!</Typograhy>
          <Typograhy>My name is Denis</Typograhy>
          <Typograhy>and this is my pet-project</Typograhy>
          <Typograhy>My skills:</Typograhy>
          <Typograhy>Буду рад любому фидбеку!</Typograhy>
          {/* <Button></Button> */}
          <Refs href={"https://t.me/denis_krychinskiy"} target={"blank"}>
            Telegram
          </Refs>
        </>
      </Inform>
    </PortfolioStyle>
  );
};

export default Portfolio;

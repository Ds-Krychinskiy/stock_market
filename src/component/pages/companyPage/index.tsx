import { observer } from "mobx-react-lite";
import Stock_Market_State from "../../../state/Stock_Market_State";
import { PriceAtTheMomentProps } from "../../../state/Stock_Market_State/interface";
import AccordionComponent from "../../organism/accordion";
import DoughnutChart from "../../organism/charts";
import {
  renderMultipliers,
  renderCompanyNews,
  renderCompanyPrice,
  renderFinancialResults,
  renderKeyExecutives,
  renderSecFilings,
  renderPriceAtTheMoment,
} from "./render";
import { CompanyPageWrapper, HeaderWrapper, MultipliersWrapper } from "./style";

const CompanyPage = observer(() => {
  const {
    multipliers,
    executive,
    filings,
    financial_rations,
    news,
    price,
    price_at_the_moment,
    getMultipliers,
  } = Stock_Market_State;
  return (
    <CompanyPageWrapper>
      {renderPriceAtTheMoment(price_at_the_moment)}
      <DoughnutChart />
      <MultipliersWrapper>
        <AccordionComponent
          name={"Financial Rations"}
          state={() => renderMultipliers(multipliers)}
          onClick={() => getMultipliers()}
        />
        <AccordionComponent
          name={"Company Price"}
          state={() => renderCompanyPrice(price)}
          onClick={() => console.log("kek")}
        />
        <AccordionComponent
          name={"Company News"}
          state={() => renderCompanyNews(news)}
          onClick={() => console.log("kek")}
        />
        <AccordionComponent
          name={"Sec Filings"}
          state={() => renderSecFilings(filings)}
          onClick={() => console.log("kek")}
        />
        <AccordionComponent
          name={"Key Executives"}
          state={() => renderKeyExecutives(executive)}
          onClick={() => console.log("kek")}
        />
        <AccordionComponent
          name={"Financial Results"}
          state={() => renderFinancialResults(financial_rations)}
          onClick={() => console.log("kek")}
        />
      </MultipliersWrapper>
    </CompanyPageWrapper>
  );
});

export default CompanyPage;

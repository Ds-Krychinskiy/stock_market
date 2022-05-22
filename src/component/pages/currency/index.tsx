import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Currency_State from "../../../state/Currency_State";
import TemplateChart from "../../temlates/companyPage";

const CurrencyPage = observer(() => {
  const { currency, getPriceCurrencyInOneMin } = Currency_State;

  useEffect(() => {
    getPriceCurrencyInOneMin("5min", 110);
  }, []);

  return (
    <>
      <TemplateChart
        price={currency}
        getPriceForChart={getPriceCurrencyInOneMin}
        getPriceForChartForTheMonth={() => console.log("kek")}
      />
    </>
  );
});

export default CurrencyPage;

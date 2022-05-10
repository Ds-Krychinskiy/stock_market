import DropDown from "../../atoms/drop_down_list";
import {
  listBeta,
  listCountry,
  listDiv,
  listExchange,
  listIndustry,
  listMarketCap,
  listSector,
  listTradingVolume,
} from "../../../list";
import { StateProps } from "../../../state/Stock_Screener_State/interface";

interface DropProps {
  state: StateProps;
  onChange: (value: string | number, field: string) => void;
}

const Drop: React.FC<DropProps> = ({ onChange, state }) => {
  const {
    beta,
    country,
    dividend,
    industry,
    exchange,
    marketCap,
    sector,
    services,
    tradingVolume,
  } = state;
  return (
    <>
      <DropDown
        onChange={(value) => onChange(value, "country")}
        list={listCountry}
        state={country}
        name={"Country"}
      />
      <DropDown
        onChange={(value) => onChange(value, "marketCap")}
        list={listMarketCap}
        state={marketCap}
        name={"Capitalization"}
      />
      <DropDown
        state={exchange}
        onChange={(value) => onChange(value, "exchange")}
        list={listExchange}
        name={"Exchange"}
      />
      <DropDown
        state={sector}
        onChange={(value) => onChange(value, "sector")}
        list={listSector}
        name={"Sector"}
      />
      <DropDown
        state={industry}
        onChange={(value) => onChange(value, "industry")}
        list={listIndustry}
        name={"Industry"}
      />
      <DropDown
        state={services}
        onChange={(value) => onChange(value, "services")}
        list={listIndustry}
        name={"Services"}
      />

      <DropDown
        state={dividend}
        onChange={(value) => onChange(value, "dividend")}
        list={listDiv}
        name={"Last Annual Dividend"}
      />
      <DropDown
        state={tradingVolume}
        onChange={(value) => onChange(value, "tradingVolume")}
        list={listTradingVolume}
        name={"Trading volume"}
      />
      <DropDown
        state={beta}
        onChange={(value) => onChange(value, "beta")}
        list={listBeta}
        name={"Volatility ratio"}
      />
    </>
  );
};

export default Drop;

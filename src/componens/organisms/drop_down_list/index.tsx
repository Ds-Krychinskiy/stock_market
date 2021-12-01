import React from "react";
import {
  listCountry,
  listExchange,
  listIndustry,
  listSector,
  listMarketCap,
  listDiv,
  listTradingVolume,
} from "../../../list";
import DropDownList from "../../atoms/drop-down_list";
import { DropDownListsStyle } from "./style";

export interface IStateProps {
  sector: string;
  services: string;
  industry: string;
  country: string;
  exchange: string;
  marketCap: string;
  tradingVolume: string;
  dividend: string;
}

interface IDropDownListsProps {
  onChange: (value: string, field: string) => void;
  state: IStateProps;
}

const DropDownLists: React.FC<IDropDownListsProps> = ({ state, onChange }) => {
  const {
    sector,
    services,
    country,
    industry,
    exchange,
    marketCap,
    tradingVolume,
    dividend,
  } = state;
  return (
    <DropDownListsStyle>
      <DropDownList
        state={sector}
        onChange={(value) => onChange(value, "sector")}
        list={listSector}
        name={"Sector"}
        id={"Sector-label"}
      />
      <DropDownList
        state={country}
        onChange={(value) => onChange(value, "country")}
        list={listCountry}
        name={"Country"}
        id={"country-label"}
      />
      <DropDownList
        state={exchange}
        onChange={(value) => onChange(value, "exchange")}
        list={listExchange}
        name={"Exchange"}
        id={"Exchange-label"}
      />
      <DropDownList
        state={industry}
        onChange={(value) => onChange(value, "industry")}
        list={listIndustry}
        name={"Industry"}
        id={"Industry-label"}
      />
      <DropDownList
        state={services}
        onChange={(value) => onChange(value, "services")}
        list={listIndustry}
        name={"Services"}
        id={"Services-label"}
      />
      <DropDownList
        state={marketCap}
        onChange={(value) => onChange(value, "marketCap")}
        list={listMarketCap}
        name={"Market Cap"}
        id={"MarketCap-label"}
      />
      <DropDownList
        state={dividend}
        onChange={(value) => onChange(value, "marketCap")}
        list={listDiv}
        name={"Last Annual Dividend"}
        id={"MarketCap-label"}
      />
      <DropDownList
        state={tradingVolume}
        onChange={(value) => onChange(value, "marketCap")}
        list={listTradingVolume}
        name={"Trading volume"}
        id={"MarketCap-label"}
      />
    </DropDownListsStyle>
  );
};
export default DropDownLists;

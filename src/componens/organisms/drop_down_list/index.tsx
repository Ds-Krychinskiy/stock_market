import React from "react";
import {
  listCountry,
  listExchange,
  listIndustry,
  listSector,
  listMarketCap,
  listDiv,
  listTradingVolume,
  listBeta,
} from "../../../list";
import Button from "../../atoms/button";
import DropDownList from "../../atoms/drop-down_list";
import Typography from "../../atoms/typography";
import { DropDownListsStyle } from "./style";

interface IStateProps {
  sector: string;
  services: string;
  industry: string;
  country: string;
  exchange: string;
  marketCap: number;
  tradingVolume: number;
  dividend: number;
  beta: number;
}

interface IDropDownListsProps {
  onChange: (value: string | number, field: string) => void;
  state: IStateProps;
  onClick: () => void;
}

const DropDownLists: React.FC<IDropDownListsProps> = ({
  state,
  onChange,
  onClick,
}) => {
  const {
    sector,
    services,
    country,
    industry,
    exchange,
    marketCap,
    tradingVolume,
    dividend,
    beta,
  } = state;
  return (
    <DropDownListsStyle>
      <DropDownList
        state={marketCap}
        onChange={(value) => onChange(value, "marketCap")}
        list={listMarketCap}
        name={"Market Cap"}
        id={"MarketCap-label"}
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
        state={sector}
        onChange={(value) => onChange(value, "sector")}
        list={listSector}
        name={"Sector"}
        id={"Sector-label"}
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
        state={dividend}
        onChange={(value) => onChange(value, "dividend")}
        list={listDiv}
        name={"Last Annual Dividend"}
        id={"MarketCap-label"}
      />
      <DropDownList
        state={tradingVolume}
        onChange={(value) => onChange(value, "tradingVolume")}
        list={listTradingVolume}
        name={"Trading volume"}
        id={"TradingVolume-label"}
      />
      <DropDownList
        state={beta}
        onChange={(value) => onChange(value, "beta")}
        list={listBeta}
        name={"Volatility ratio"}
        id={"Beta-label"}
      />
      <Button onClick={onClick}>
        <Typography>Save</Typography>
      </Button>
    </DropDownListsStyle>
  );
};
export default DropDownLists;

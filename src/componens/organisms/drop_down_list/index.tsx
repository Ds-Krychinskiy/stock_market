import React from "react";
import {
  listCountry,
  listExchange,
  listIndustry,
  listSector,
} from "../../../list";
import DropDownList from "../../atoms/drop-down_list";
import { DropDownListsStyle } from "./style";

export interface IStateProps {
  sector: string;
  services: string;
  industry: string;
  country: string;
  exchange: string;
}

interface IDropDownListsProps {
  onChange: (value: string, field: string) => void;
  state: IStateProps;
}

const DropDownLists: React.FC<IDropDownListsProps> = ({ state, onChange }) => {
  const { sector, services, country, industry, exchange } = state;
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
    </DropDownListsStyle>
  );
};
export default DropDownLists;

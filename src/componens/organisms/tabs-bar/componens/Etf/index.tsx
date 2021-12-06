import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";

import TabsComponent from "../../../../atoms/tabs";

import { TabsBarStyle } from "./../../style";

import { useHistory, useLocation } from "react-router";
import {
  CountryWeightions,
  HistoricalPrices,
  ListETF,
  SectorWeightings,
} from "../../../../../routes";

const Etf = () => {
  const [selectedTab, setSelectedTab] = useState(ListETF);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const goToTheListETF = () => {
    history.push(ListETF);
  };
  const goToTheHistoricalPrices = () => {
    history.push(HistoricalPrices);
  };
  const goToTheSectorWeightings = () => {
    history.push(SectorWeightings);
  };
  const goToTheCountryWeightions = () => {
    history.push(CountryWeightions);
  };

  return (
    <TabsBarStyle>
      <Tabs sx={{color: "#f26b38"}} value={selectedTab} aria-label="simple tabs example">
        <TabsComponent
          value={ListETF}
          onClick={() => goToTheListETF()}
          label={"List ETF"}
        />
        <TabsComponent
          value={HistoricalPrices}
          onClick={() => goToTheHistoricalPrices()}
          label={"Historical Prices"}
        />
        <TabsComponent
          value={SectorWeightings}
          onClick={() => goToTheSectorWeightings()}
          label={"Sector Weightings"}
        />
        <TabsComponent
          value={CountryWeightions}
          onClick={() => goToTheCountryWeightions()}
          label={"Country Weightions"}
        />
      </Tabs>
    </TabsBarStyle>
  );
};
export default Etf;

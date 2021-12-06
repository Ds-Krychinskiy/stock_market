import React, { useEffect, useState } from "react";
import TabsComponent from "../../../../atoms/tabs";
import Tabs from "@mui/material/Tabs";

import { TabsBarStyle } from "./../../style";

import { useHistory, useLocation } from "react-router";
import { CurrentValue, HistoricalData } from "../../../../../routes";

const Currency = () => {
  const [selectedTab, setSelectedTab] = useState(CurrentValue);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const goToTheListETF = () => {
    history.push(CurrentValue);
  };
  const goToTheHistoricalPrices = () => {
    history.push(HistoricalData);
  };

  return (
    <TabsBarStyle>
      <Tabs sx={{color: "#f26b38"}} value={selectedTab} aria-label="simple tabs example">
        <TabsComponent
          value={CurrentValue}
          onClick={() => goToTheListETF()}
          label={"Current Value"}
        />
        <TabsComponent
          value={HistoricalData}
          onClick={() => goToTheHistoricalPrices()}
          label={"Historical Data"}
        />
      </Tabs>
    </TabsBarStyle>
  );
};

export default Currency;

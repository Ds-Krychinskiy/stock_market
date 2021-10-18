import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react";

import { CurrentValue, HistoricalData } from "../../routes";

const Links = () => {
  const [selectedTab, setSelectedTab] = useState(CurrentValue);
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const history = useHistory();

  const showCurrentValue = () => {
    history.push(CurrentValue);
  };
  const showHistoricalData = () => {
    history.push(HistoricalData);
  };

  return (
    <Tabs value={selectedTab} aria-label="simple tabs example">
      <Tab
        value={CurrentValue}
        onClick={showCurrentValue}
        label="Current Value"
      />
      <Tab
        value={HistoricalData}
        onClick={showHistoricalData}
        label="Historical Data"
      />
    </Tabs>
  );
};
export default Links;

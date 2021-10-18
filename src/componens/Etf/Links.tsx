import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useHistory, useLocation } from "react-router";
import {
  ListETF,
  HistoricalPrices,
  SectorWeightings,
  CountryWeightions,
} from "../../routes";
import { useState, useEffect } from "react";

interface ILinksProps {}
const Links: React.FC<ILinksProps> = () => {
  const [selectedTab, setSelectedTab] = useState(ListETF);
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const history = useHistory();

  const goToTheListETF = () => {
    history.push(ListETF);
  };
  const goToHistoricalPrices = () => {
    history.push(HistoricalPrices);
  };
  const goToSectorWeightings = () => {
    history.push(SectorWeightings);
  };
  const goToCountryWeightions = () => {
    history.push(CountryWeightions);
  };

  return (
    <Tabs value={selectedTab} aria-label="simple tabs example">
      <Tab value={ListETF} onClick={goToTheListETF} label="List ETF" />
      <Tab
        value={HistoricalPrices}
        onClick={goToHistoricalPrices}
        label="Historical Prices"
      />
      <Tab
        value={SectorWeightings}
        onClick={goToSectorWeightings}
        label="Sector Weightings"
      />
      <Tab
        value={CountryWeightions}
        onClick={goToCountryWeightions}
        label="Country Weightions"
      />
    </Tabs>
  );
};
export default Links;

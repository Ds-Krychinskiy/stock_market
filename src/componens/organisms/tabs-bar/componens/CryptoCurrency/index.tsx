import React, { useEffect, useState } from "react";
import TabsComponent from "../../../../atoms/tabs";
import { useHistory, useLocation } from "react-router";
import { PriceCryptoCurrency } from "../../../../../routes";
import Tabs from "@mui/material/Tabs";

const CryptoCurrency = () => {
  const [selectedTab, setSelectedTab] = useState(PriceCryptoCurrency);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname.split("/")[2]);
  }, [location]);

  const goToThePrice = () => {
    history.push(PriceCryptoCurrency);
  };

  return (
    <div>
      <Tabs
        sx={{ color: "#f26b38" }}
        value={selectedTab}
        aria-label="simple tabs example"
      >
        <TabsComponent
          value={PriceCryptoCurrency}
          onClick={() => goToThePrice()}
          label={"Price Cryptocurrency"}
        />
      </Tabs>
    </div>
  );
};
export default CryptoCurrency;

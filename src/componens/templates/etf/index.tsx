import React, { useState } from "react";
import InputMolecule from "../../molecules/input";
import TabsBar from "../../organisms/tabs-bar";
import { Route, Switch } from "react-router";
import CountryWeightions from "../../organisms/table/componens/Etf/Country_Weightions";
import ListEtf from "../../organisms/table/componens/Etf/List_ETF";
import HistoricalPrice from "../../organisms/table/componens/Etf/Historical_Prices";
import SectorWeightings from "../../organisms/table/componens/Etf/Sector_Weightings";

import * as routes from "../../../routes";

const Etf = () => {
  const [tiker, setTiker] = useState("");

  return (
    <div>
      <InputMolecule setTiker={setTiker} />
      <TabsBar variant={"etf"} />
      <Switch>
        <Route path={`/${routes.Etf}/${routes.ListETF}`}>
          <ListEtf tiker={tiker} />
        </Route>
        <Route path={`/${routes.Etf}/${routes.HistoricalPrices}`}>
          <HistoricalPrice tiker={tiker} />
        </Route>
        <Route path={`/${routes.Etf}/${routes.SectorWeightings}`}>
          <SectorWeightings tiker={tiker} />
        </Route>
        <Route path={`/${routes.Etf}/${routes.CountryWeightions}`}>
          <CountryWeightions tiker={tiker} />
        </Route>
      </Switch>
    </div>
  );
};

export default Etf;

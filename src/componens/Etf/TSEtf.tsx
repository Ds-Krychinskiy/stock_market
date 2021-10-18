import InputEtf from "./InputEtf";
import ListETF from "./components/ListETF";
import Links from "./Links";

import { useState } from "react";
import axios from "../../axios";

import { Route, Switch } from "react-router";

import * as routes from "../../routes";
import SectorWeightings from "./components/SectorWeightings";
import CountryWeightions from "./components/CountryWeightions";
import HistoricalPrices from "./components/HistoricalPrices";

export interface ITSEtf {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
  exchangeShortName: string;
  type: string;
}

const TSEtf = () => {
  const [tiker, setTiker] = useState("");
  const [etf, setEtf] = useState<ITSEtf[]>([]);

  const onAdd = () => {
    axios
      .get(`stock/list?`)
      .then((response) => setEtf(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };
  return (
    <>
      <InputEtf setTiker={setTiker} onAdd={onAdd} />
      <Links />
      <Switch>
        <Route path={`/${routes.Etf}/${routes.ListETF}`}>
          <ListETF tiker={tiker} etf={etf} />
        </Route>

        <Route path={`/${routes.Etf}/${routes.SectorWeightings}`}>
          <SectorWeightings tiker={tiker} />
        </Route>

        <Route path={`/${routes.Etf}/${routes.HistoricalPrices}`}>
          <HistoricalPrices tiker={tiker} />
        </Route>

        <Route path={`/${routes.Etf}/${routes.CountryWeightions}`}>
          <CountryWeightions tiker={tiker} />
        </Route>
      </Switch>
    </>
  );
};

export default TSEtf;

import InputCurrency from "./InputCurrency";
import CurrentValue from "./components/CurrentValue";
import HistoricalData from "./components/HistoricalData";
import axios from "../../axios";

import { useState } from "react";
import Links from "./Links";
import { Route, Switch } from "react-router";

interface ICurrency {
  ticker: string;
  bid: string;
  ask: string;
  open: string;
  low: string;
  high: string;
  changes: string;
  date: string;
}

const TSCurrency = () => {
  const [fx, setFx] = useState("");

  const [currencies, setCurrency] = useState<ICurrency[]>([]);

  const onAdd = (value: string) => {
    axios
      .get(`fx?`)
      .then((response) => setCurrency(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });

    setFx(value);
  };
  return (
    <>
      <InputCurrency onAdd={onAdd} />
      <Links />
      <Switch>
        <Route path="/currency/current_value">
          <CurrentValue currencies={currencies} fx={fx} />
        </Route>
        <Route path="/currency/historical_data">
          <HistoricalData fx={fx} />
        </Route>
      </Switch>
    </>
  );
};

export default TSCurrency;
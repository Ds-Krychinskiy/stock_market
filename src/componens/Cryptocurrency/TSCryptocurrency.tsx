import InputCryptocurrency from "./InputCryptocurrency";
import { useState } from "react";

import axios from "../../axios";
import TaskScreen from "./components/TaskScreen";

interface ITSCryptocurrency {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  sharesOutstanding: number;
  timestamp: number;
}

const TSCryptocurrency = () => {
  const [value, setValue] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState<ITSCryptocurrency[]>([]);

  const onAdd = (value: string) => {
    axios
      .get(`quote/${value}USD`)
      .then((response) => setCryptocurrency(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };
  return (
    <div>
      <InputCryptocurrency onAdd={onAdd} />
      <TaskScreen cryptocurrency={cryptocurrency} />
    </div>
  );
};

export default TSCryptocurrency;

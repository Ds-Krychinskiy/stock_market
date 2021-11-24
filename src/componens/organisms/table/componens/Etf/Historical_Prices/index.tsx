import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface IFundHolders {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

interface IHistoricalPriceProps {
  tiker: string;
}

const HistoricalPrice: React.FC<IHistoricalPriceProps> = ({ tiker }) => {
  const [prices, setPrices] = useState<IFundHolders[]>([]);

  useEffect(() => {
    axios
      .get(`historical-chart/4hour/${tiker}?`)
      .then((response) => setPrices(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {prices.map((el) => (
        <div>
          {tiker}
          <p>{el.date}</p>
          <p>{el.open}</p>
          <p>{el.low}</p>
          <p>{el.high}</p>
          <p>{el.close}</p>
          <p>{el.volume}</p>
        </div>
      ))}
    </div>
  );
};
export default HistoricalPrice;

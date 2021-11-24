import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
interface IStockCP {
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
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

interface IStockCPProps {
  tiker: string;
}

const CompanyProfile: React.FC<IStockCPProps> = ({ tiker }) => {
  const [price, setPrice] = useState<IStockCP[]>([]);

  useEffect(() => {
    axios
      .get(`quote/${tiker}?`)
      .then((response) => setPrice(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {price.map((el) => (
        <>
          <p>Цена одной акции: {el.price}</p>
          <p>Цена на открытие торгов: {el.open}</p>
          <p>Минимальная цена за день: {el.dayLow}</p>
          <p>Максимльная цена за день: {el.dayHigh}</p>
          <p>Минимальная цена за год: {el.yearLow}</p>
          <p>Максимльная цена за год: {el.yearHigh}</p>
        </>
      ))}
    </div>
  );
};
export default CompanyProfile;

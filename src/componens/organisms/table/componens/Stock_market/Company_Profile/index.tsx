import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
import Typography from "../../../../../atoms/typography";
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
          <Typography>Цена одной акции: {el.price}</Typography>
          <Typography>Цена на открытие торгов: {el.open}</Typography>
          <Typography>Минимальная цена за день: {el.dayLow}</Typography>
          <Typography>Максимльная цена за день: {el.dayHigh}</Typography>
          <Typography>Минимальная цена за год: {el.yearLow}</Typography>
          <Typography>Максимльная цена за год: {el.yearHigh}</Typography>
        </>
      ))}
    </div>
  );
};
export default CompanyProfile;

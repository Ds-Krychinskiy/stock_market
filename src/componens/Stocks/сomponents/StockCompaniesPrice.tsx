import { useState, useEffect } from "react";
import axios from "../../../axios";

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

const StockCompaniesPrice: React.FC<IStockCPProps> = ({ tiker }) => {
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
    <>
      {price.map((e) => (
        <div>
          {e.symbol}
          <ol>
            <li>Название компании: {e.name}</li>
            <li>Цена одной акции: {e.price}</li>
            <li>Цена на открытие торгов: {e.open}</li>
            <li>Минимальная цена за день: {e.dayLow}</li>
            <li>Максимльная цена за день: {e.dayHigh}</li>
            <li>Минимальная цена за год: {e.yearLow}</li>
            <li>Максимльная цена за год: {e.yearHigh}</li>
          </ol>
        </div>
      ))}
    </>
  );
};
export default StockCompaniesPrice;

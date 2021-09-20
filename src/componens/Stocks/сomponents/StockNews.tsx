import axios from "../../../axios";
import { useState, useEffect } from "react";

interface IStockNews {
  symbol: string;
  publishedDate: string;
  title: string;
  text: string;
}

interface IStockNewsProps {
  tiker: string;
}

const StockNews: React.FC<IStockNewsProps> = ({ tiker }) => {
  const [news, setNews] = useState<IStockNews[]>([]);

  useEffect(() => {
    axios
    .get(`stock_news?tickers=${tiker}&limit=50&`)
    .then((response) => setNews(response.data))
    .catch((error) => {
      console.log("Sorry, Bro");
    });
  }, [tiker]);

  return (
    <>
      {news.map((e) => (
        <div>
          {e.symbol}
          <ol>
            <li>Дата публикации: {e.publishedDate}</li>
            <li>{e.title}</li>
            <li>{e.text}</li>
          </ol>
        </div>
      ))}
    </>
  );
};

export default StockNews;

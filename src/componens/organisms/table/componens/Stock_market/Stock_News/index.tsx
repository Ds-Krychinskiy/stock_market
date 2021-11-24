import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface IStockNews {
  symbol: string;
  publishedDate: string;
  title: string;
  text: string;
  url: string;
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
    <div>
      {news.map((e) => (
        <>
          <p>Дата публикации: {e.publishedDate}</p>
          <p>{e.title}</p>
          <p>{e.text}</p>
          <a href={e.url}>{e.url}</a>
        </>
      ))}
    </div>
  );
};
export default StockNews;

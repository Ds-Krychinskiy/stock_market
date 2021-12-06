import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
import Typography from "../../../../../atoms/typography";

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
          <Typography>Дата публикации: {e.publishedDate}</Typography>
          <Typography>{e.title}</Typography>
          <Typography>{e.text}</Typography>
          <a href={e.url}>{e.url}</a>
        </>
      ))}
    </div>
  );
};
export default StockNews;

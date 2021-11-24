import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface ITSEtf {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
  exchangeShortName: string;
  type: string;
}
interface IListEtfProps {
  tiker: string;
}
const ListEtf: React.FC<IListEtfProps> = ({ tiker }) => {
  const [etf, setEtf] = useState<ITSEtf[]>([]);

  useEffect(() => {
    axios
      .get(`stock/list?`)
      .then((response) => setEtf(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {etf
        .filter((el) => el.symbol === tiker)
        .map((el) => (
          <>
            <div>
              <p>Тикер: {el.symbol}</p>
              <p>Название фонда: {el.name}</p>
              <p>Цена: {el.price}</p>
              <p>Биржа: {el.exchange}</p>
              <p>тип: {el.type}</p>
            </div>
          </>
        ))}
    </div>
  );
};
export default ListEtf;

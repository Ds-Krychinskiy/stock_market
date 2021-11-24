import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface ICompanyPR {
  symbol: string;
  companyName: string;
  price: number;
  sector: string;
  state: string;
  city: string;
  ceo: string;
  description: string;
  website: string;
  exchange: string;
  ipoDate: string;
}

interface ICompanyPRProps {
  tiker: string;
}

const StockCP: React.FC<ICompanyPRProps> = ({ tiker }) => {
  const [profils, setProfile] = useState<ICompanyPR[]>([]);
  useEffect(() => {
    axios
      .get(`profile/${tiker}`)
      .then((response) => setProfile(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {profils.map((el) => (
        <>
          <p>Цена одной акции: {el.price}</p>
          <p>Сектор работы компании: {el.sector}</p>
          <p>Штат: {el.state}</p>
          <p>Город: {el.city}</p>
          <p>CEO: {el.ceo}</p>
          <p>Описание: {el.description}</p>
          <p>
            Cайт:
            <a href={el.website}>{el.website}</a>
          </p>
          <p>
            Биржа, на которой торгуются ценные бумаги компании:
            {el.exchange}
          </p>
          <p>Дата публичного размещения компании: {el.ipoDate}</p>
        </>
      ))}
    </div>
  );
};
export default StockCP;

import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
import Typography from "../../../../../atoms/typography";

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
          <Typography>Цена одной акции: {el.price}</Typography>
          <Typography>Сектор работы компании: {el.sector}</Typography>
          <Typography>Штат: {el.state}</Typography>
          <Typography>Город: {el.city}</Typography>
          <Typography>CEO: {el.ceo}</Typography>
          <Typography>Описание: {el.description}</Typography>
          <Typography>
            Cайт:
            <a href={el.website}>{el.website}</a>
          </Typography>
          <Typography>
            Биржа, на которой торгуются ценные бумаги компании:
            {el.exchange}
          </Typography>
          <Typography>Дата публичного размещения компании: {el.ipoDate}</Typography>
        </>
      ))}
    </div>
  );
};
export default StockCP;

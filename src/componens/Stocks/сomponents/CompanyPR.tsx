import { useState, useEffect } from "react";
import axios from "../../../axios";

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

const CompanyProfile: React.FC<ICompanyPRProps> = ({ tiker }) => {
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
      {profils.map((profile) => (
        <ol>
          <li>Тикер: {profile.symbol}</li>
          <li>Названия компании; {profile.companyName}</li>
          <li>Цена одной акции: {profile.price}</li>
          <li>Сектор работы компании: {profile.sector}</li>
          <li>Штат: {profile.state}</li>
          <li>Город: {profile.city}</li>
          <li>CEO: {profile.ceo}</li>
          <li>Описание: {profile.description}</li>
          <li>Cайт: {profile.website}</li>
          <li>
            Биржа, на которой торгуются ценные бумаги компании:
            {profile.exchange}
          </li>
          <li>Дата публичного размещения компании: {profile.ipoDate}</li>
        </ol>
      ))}
    </div>
  );
};

export default CompanyProfile;

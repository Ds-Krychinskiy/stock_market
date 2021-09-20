import axios from "../../../axios";
import { useState, useEffect } from "react";

interface IKeyExecutives {
  symbol: string;
  yearBorn: number;
  pay: number;
  currencyPay: string;
  name: string;
  title: string;
  gender: string;
  titleSince?: string;
}

interface IKeyExecutivesProps {
  tiker: string;
}

const KeyExecutives: React.FC<IKeyExecutivesProps> = ({ tiker }) => {
  const [executives, setExecutives] = useState<IKeyExecutives[]>([]);

  useEffect(() => {
    axios
        .get(`key-executives/${tiker}?`)
        .then((response) => setExecutives(response.data))
        .catch((error) => {
          console.log("Sorry, Bro");
        });
  }, [tiker]);

  return (
    <>
      {executives.map((e) => (
        <div>
          {e.symbol}
          <ol>
            <li>Должность: {e.title}</li>
            <li>Имя: {e.name}</li>
            <li>Пол: {e.gender}</li>
            <li>Год рождения: {e.yearBorn}</li>
            <li>Дата вступление в должность: {e.titleSince}</li>
          </ol>
        </div>
      ))}
    </>
  );
};

export default KeyExecutives;

import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface IKeyExecutivesProps {
  tiker: string;
}
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
    <div>
      {executives.map((e) => (
        <>
          <p>Должность: {e.title}</p>
          <p>Имя: {e.name}</p>
          <p>Пол: {e.gender}</p>
          <p>Год рождения: {e.yearBorn}</p>
          <p>Дата вступление в должность: {e.titleSince}</p>
        </>
      ))}
    </div>
  );
};
export default KeyExecutives;

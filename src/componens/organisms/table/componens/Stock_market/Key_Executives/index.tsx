import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
import Typography from "../../../../../atoms/typography";

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
          <Typography>Должность: {e.title}</Typography>
          <Typography>Имя: {e.name}</Typography>
          <Typography>Пол: {e.gender}</Typography>
          <Typography>Год рождения: {e.yearBorn}</Typography>
          <Typography>Дата вступление в должность: {e.titleSince}</Typography>
        </>
      ))}
    </div>
  );
};
export default KeyExecutives;

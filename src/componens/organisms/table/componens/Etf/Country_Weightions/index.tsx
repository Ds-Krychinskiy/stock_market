import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface ICountryWeightions {
  country: string;
  weightPercentage: string;
}
interface ICountryWeightionsProps {
  tiker: string;
}

const CountryWeightions: React.FC<ICountryWeightionsProps> = ({ tiker }) => {
  const [weight, setWeight] = useState<ICountryWeightions[]>([]);
  useEffect(() => {
    axios
      .get(`etf-country-weightings/${tiker}?`)
      .then((response) => setWeight(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {weight.map((el) => (
        <div>
          <p>Страна: {el.country}</p>
          <p>Вес страны в фонде: {el.weightPercentage}</p>
        </div>
      ))}
    </div>
  );
};
export default CountryWeightions;

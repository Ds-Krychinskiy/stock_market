import InputCurrency from "./InputCurrency";
import { useState } from "react";
import axios from "axios";
import Links from "./Links";

interface ICurrency {}

const TSCurrency = () => {
  const [value, setValue] = useState("");

  const apikey = "e2dc68a4357331f2d4385f9312fbbade";
  const [currency, setCurrency] = useState<ICurrency[]>([]);

  const apiUrl = `https://financialmodelingprep.com/api/v3/fx/${value}?apikey=${apikey}`;
  const privateAxios = axios.create({ baseURL: apiUrl });
  const onAdd = (value: string) => {
    privateAxios
      .get(apiUrl)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };
  return (
    <>
      <InputCurrency value={value} setValue={setValue} />;
      <Links />
    </>
  );
};

export default TSCurrency;

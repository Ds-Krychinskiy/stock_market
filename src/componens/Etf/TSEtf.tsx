import InputEtf from "./InputEtf";
import { useState } from "react";
import axios from "axios";

interface ITSEtf {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
}

const TSEtf = () => {
  const [value, setValue] = useState("");
  const apikey = "e2dc68a4357331f2d4385f9312fbbade";
  const [etf, setEtf] = useState<ITSEtf[]>([]);

  const apiUrl = `https://financialmodelingprep.com/api/v3/historical-chart/4hour/${value}?apikey=${apikey}`;
  const privateAxios = axios.create({ baseURL: apiUrl });
  const onAdd = () => {
    privateAxios
      .get(apiUrl)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };

  return <InputEtf value={value} setValue={setValue} onClick={onAdd} />;
};

export default TSEtf;

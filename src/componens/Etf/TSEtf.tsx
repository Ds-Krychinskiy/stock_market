import InputEtf from "./InputEtf";
import { useState } from "react";
import axios from "../../axios";
interface ITSEtf {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
}

const TSEtf = () => {
  const [state, setstate] = useState("");
  const [etf, setEtf] = useState<ITSEtf[]>([]);

  const onAdd = (value: string) => {
    axios
      .get(`ratios-ttm/${value}`)
      .then((response) => setEtf(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };

  return (
    <>
      <InputEtf onAdd={onAdd} />
    </>
  );
};

export default TSEtf;

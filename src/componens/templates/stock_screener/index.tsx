import React, { useCallback, useState } from "react";
import axios from "../../../axios";
import Button from "../../atoms/button";
import DropDownLists from "../../organisms/drop_down_list";

const CreateState = {
  sector: "",
  services: "",
  industry: "",
  country: "",
  exchange: "",
  marketCap: "",
  dividend: "",
  tradingVolume: "",
};

interface IScreenerProps {
  symbol: string;
  companyName: string;
  marketCap: number;
  sector: string;
  beta: number;
  price: number;
  lastAnnualDividend: number;
  volume: number;
  exchange: string;
  exchangeShortName: string;
}
// CreateState.industry = "kek"
// CreateState["industry"] = "kek"

const StockScreener = () => {
  const [state, setState] = useState(CreateState);
  const [screener, setScreener] = useState<IScreenerProps[]>([]);
  const onAdd = useCallback((value: string, field: string) => {
    setState((_state) => ({ ..._state, [field]: value }));
  }, []);

  const onClick = () => {
    axios
      .get(`stock-screener?volumeMoreThan=125000000&`)
      .then((response) => setScreener(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };
  // stock-screener?marketCapMoreThan=${state.marketCap}&sector=${state.sector}&industry=${state.industry}&exchange=${state.exchange}&dividendMoreThan=0&limit=100&
  return (
    <div>
      <DropDownLists state={state} onChange={onAdd} />
      <Button onClick={onClick} />
      {screener.map((el) => (
        <div>
          <p>{el.companyName}</p>
          <p>{el.symbol}</p>
          <p>{el.marketCap}</p>
          <p>{el.price}</p>
          <p>{el.beta}</p>
          <p>{el.exchangeShortName}</p>
          <p>{el.sector}</p>
          <p>дивиденды {el.lastAnnualDividend}</p>
        </div>
      ))}
    </div>
  );
};

export default StockScreener;

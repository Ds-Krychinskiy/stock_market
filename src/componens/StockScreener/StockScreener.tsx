import axios from "../../axios";
import { useState, useEffect } from "react";
import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputScreener from "./InputScreener";

interface IStockScreener {
  symbol: string;
  companyName: string;
  marketCap: number;
  sector: string;
  industry: string;
  beta: number;
  price: number;
  lastAnnualDividend: number;
  volume: number;
  exchange: string;
  exchangeShortName: string;
  country: string;
}

interface IStockScreenerProps {}

const StockScreener: React.FC<IStockScreenerProps> = ({}) => {
  const [screener, setScreener] = useState<IStockScreener[]>([]);
  const [marketCap, setMarketCap] = useState(0);
  const [beta, setBeta] = useState(0);
  const [volume, setVolume] = useState(0);
  const [sector, setSector] = useState("");
  const [industry, setIndustry] = useState("");
  const [exchange, setExchange] = useState("");
  const [dividend, setDividend] = useState(0);
  const numbers = () => {
    console.log("render")
    return beta;
  }
  const onAdd = () => {
    axios
      .get(
        `stock-screener?marketCapMoreThan=${marketCap}&betaMoreThan=${beta}&volumeMoreThan=${volume}&sector=${sector}&industry=${industry}&exchange=${exchange}&dividendMoreThan=${dividend}&limit=100&`
      )
      .then((response) => setScreener(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  };

  return (
    <div>
      <InputScreener onAdd={onAdd} />
      <p>{numbers()}</p>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
      >
        <p>Market Cap</p>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Mega($200 bln and more)</MenuItem>
        <MenuItem value={2}>Large($10bln to $200 bln)</MenuItem>
        <MenuItem value={3}>Mid($2bln to $10bln)</MenuItem>
        <MenuItem value={4}>Small($300mln to $2bln)</MenuItem>
        <MenuItem value={5}>Micro ($50mln to $300bln)</MenuItem>
        <MenuItem value={6}>Nano(under $50mln)</MenuItem>
        <MenuItem value={7}>+Lange (over $10bln)</MenuItem>
        <MenuItem value={8}>+Mid (over $2bln)</MenuItem>
        <MenuItem value={9}>+Small (over $300mln)</MenuItem>
        <MenuItem value={10}>+Micro (over $50mln)</MenuItem>
        <MenuItem value={11}>-Large (under $200bln)</MenuItem>
        <MenuItem value={12}>-Mid (under $10bln)</MenuItem>
        <MenuItem value={13}>-Small (under $2bln)</MenuItem>
        <MenuItem value={14}>-Micro (under $300mln)</MenuItem>
      </Select>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
      >
        <p>Exchange</p>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>AMEX</MenuItem>
        <MenuItem value={2}>NASDAQ</MenuItem>
        <MenuItem value={3}>NYSE</MenuItem>
        <MenuItem value={3}>euronext</MenuItem>
        <MenuItem value={3}>tsx</MenuItem>
      </Select>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
      >
        <p>sector</p>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Consumer Cyclical</MenuItem>
        <MenuItem value={2}> Energy</MenuItem>
        <MenuItem value={3}>Technology</MenuItem>
        <MenuItem value={4}>Industrials</MenuItem>
        <MenuItem value={5}> Financial Services</MenuItem>
        <MenuItem value={6}>Basic Materials</MenuItem>
        <MenuItem value={7}> Communication</MenuItem>
      </Select>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
      >
        <p>Industry</p>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Autos">Autos</MenuItem>
        <MenuItem value="Banks">Banks</MenuItem>
        <MenuItem value="Banks Diversified">Banks Diversified</MenuItem>
        <MenuItem value="Software">Software</MenuItem>
        <MenuItem value="Banks Regional">Banks Regional</MenuItem>
        <MenuItem value="Beverages Alcoholic">Beverages Alcoholic</MenuItem>
        <MenuItem value="Beverages Brewers">Beverages Brewers</MenuItem>
        <MenuItem value="Beverages Non-Alcoholic">
          Beverages Non-Alcoholic
        </MenuItem>
      </Select>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
      >
        <p>Country</p>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>US</MenuItem>
        <MenuItem value={2}>UK</MenuItem>
        <MenuItem value={3}>MX</MenuItem>
        <MenuItem value={4}>BR</MenuItem>
        <MenuItem value={5}>RU</MenuItem>
        <MenuItem value={6}>HK</MenuItem>
        <MenuItem value={7}>CA</MenuItem>
      </Select>
      {screener.map((el) => (
        <div>
          {el.symbol}
          {el.price}
          {el.companyName}
          {el.country}
          {el.exchange}
          {el.exchangeShortName}
          {el.industry}
          {el.marketCap}
        </div>
      ))}
    </div>
  );
};
// const a = "https://financialmodelingprep.com/api/v3/stock-screener?
// betaMoreThan=1&
// volumeMoreThan=10000&
// sector=Technology&
// exchange=NASDAQ&
// dividendMoreThan=0&

export default StockScreener;

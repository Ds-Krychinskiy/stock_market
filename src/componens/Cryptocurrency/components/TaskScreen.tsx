import ITSCryptocurrency from "./../TSCryptocurrency";

interface ITSCryptocurrency {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  sharesOutstanding: number;
  timestamp: number;
}

interface ICryptocurrencyProps {
  cryptocurrency: ITSCryptocurrency[];
}

const Cryptocurrency: React.FC<ICryptocurrencyProps> = ({ cryptocurrency }) => {
  return (
    <div>
      {cryptocurrency.map((el) => (
        <div>
          <li>Тикер: {el.symbol}</li>
          <li>Название криптовалюты: {el.name}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      ))}
    </div>
  );
};

export default Cryptocurrency;

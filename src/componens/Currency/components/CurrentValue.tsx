interface ICurrency {
  ticker: string;
  bid: string;
  ask: string;
  open: string;
  low: string;
  high: string;
  changes: string;
  date: string;
}

interface ICurrentValueProps {
  currencies: ICurrency[];
  fx: string;
}

const CurrentValue: React.FC<ICurrentValueProps> = ({ currencies, fx }) => {
  return (
    <div>
      {currencies
        .filter((currency) => currency.ticker.includes(fx))
        .map((currency) => (
          <ol>
            <li>Тикер валютной пары: {currency.ticker}</li>
            <li>Bid: {currency.bid}</li>
            <li>Ask: {currency.ask}</li>
            <li>Open: {currency.open}</li>
            <li>Low: {currency.low}</li>
            <li>High: {currency.high}</li>
            <li>Changes: {currency.changes}</li>
            <li>Даты: {currency.date}</li>
          </ol>
        ))}
    </div>
  );
};

export default CurrentValue;

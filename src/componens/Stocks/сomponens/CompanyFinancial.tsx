interface ITSStocks {
  symbol: string;
  companyName: string;
  price: number;
  sector: string;
  state: string;
  city: string;
  ceo: string;
  description: string;
  website: string;
  exchange: string;

  peRatioTTM: number;
  pegRatioTTM: number;
  payoutRatioTTM: number;
  currentRatioTTM: number;
  quickRatioTTM: number;
  daysOfInventoryOutstandingTTM: number;
  operatingCycleTTM: number;
  GrossProfitMarginTTM: number;
  OperatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;
}

interface ICompanyFinancialProps {
  stocks: ITSStocks[];
}

const CompanyFinancial: React.FC<ICompanyFinancialProps> = ({ stocks }) => {
  return (
    <div>
      {stocks.map((stock) => (
        <ol>
          <li>P/E: {stock.peRatioTTM}</li>
          <li>PEG: {stock.pegRatioTTM}</li>
          <li>Коэффициент выплат: {stock.payoutRatioTTM}</li>
          <li>Коэффициент текущей ликвидности: {stock.currentRatioTTM}</li>
          <li>Коэффициент быстрой ликвидности: {stock.quickRatioTTM}</li>
          <li>
            Количество дней без выкупа: {stock.daysOfInventoryOutstandingTTM}
          </li>
          <li>
            Оборачиваемость оборотного капитала: {stock.operatingCycleTTM}
          </li>
        </ol>
      ))}
    </div>
  );
};

export default CompanyFinancial;

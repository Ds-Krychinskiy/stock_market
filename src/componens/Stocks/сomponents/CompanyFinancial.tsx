interface ITSStocks {
  peRatioTTM: number;
  pegRatioTTM: number;
  payoutRatioTTM: number;
  currentRatioTTM: number;
  operatingCycleTTM: number;
  GrossProfitMarginTTM: number;
  OperatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;

  dividendYielTTM: number;
  cashRatioTTM: number;
  daysOfSalesOutstandingTTM: number;
  daysOfPayablesOutstandingTTM: number;
  cashConversionCycleTTM: number;
  grossProfitMarginTTM: number;
  operatingProfitMarginTTM: number;
  effectiveTaxRateTTM: number;
  netIncomePerEBTTTM: number;
  ebtPerEbitTTM: number;
  debtRatioTTM: number;
  longTermDebtToCapitalizationTTM: number;
  totalDebtToCapitalizationTTM: number;
  interestCoverageTTM: number;
  cashFlowToDebtRatioTTM: number;
  companyEquityMultiplierTTM: number;
  receivablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  fixedAssetTurnoverTTM: number;
  assetTurnoverTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  operatingCashFlowSalesRatioTTM: number;
  freeCashFlowOperatingCashFlowRatioTTM: number;
  cashFlowCoverageRatiosTTM: number;
  priceBookValueRatioTTM: number;
  priceToSalesRatioTTM: number;
  priceToFreeCashFlowsRatioTTM: number;
  dividendYieldTTM: number;
  enterpriseValueMultipleTTM: number;
  priceFairValueTTM: number;
  dividendPerShareTTM: number;
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
          <li>Дивидендная доходность: {stock.dividendYielTTM}</li>
          <li>Коэффициент выплат: {stock.payoutRatioTTM}</li>
          <li>
            Оборачиваемость оборотного капитала: {stock.operatingCycleTTM}
          </li>
          <li>
            Количество дней до конца продаж: {stock.daysOfSalesOutstandingTTM}
          </li>
          <li>
            Оборачиваемость оборотного капитала: {stock.operatingCycleTTM}
          </li>
          <li>
            Количество дней к оплате: {stock.daysOfPayablesOutstandingTTM}
          </li>
          <li>
            Цикл конвертации наличных денег: {stock.cashConversionCycleTTM}
          </li>
          <li>Валовая прибыль: {stock.grossProfitMarginTTM}</li>
          <li>Маржа опарационнаой прибыли: {stock.operatingProfitMarginTTM}</li>
          <li>
            Маржа прибыли до налогообложения: {stock.pretaxProfitMarginTTM}
          </li>
          <li>Маржа чистой прибыли: {stock.netProfitMarginTTM}</li>
          <li>Эффективная нологовая ставка: {stock.effectiveTaxRateTTM}</li>
          <li>ROA: {stock.returnOnAssetsTTM}</li>
          <li>ROE: {stock.returnOnEquityTTM}</li>
          <li>
            Доход на вложенный капитал: {stock.returnOnCapitalEmployedTTM}
          </li>
          <li>EBIT/EV: {stock.ebtPerEbitTTM}</li>
          <li>D/E: {stock.debtRatioTTM}</li>
          <li>
            Отношение долгосрочной задолженности к капитализации:{" "}
            {stock.longTermDebtToCapitalizationTTM}
          </li>
          <li>Коэффициент покрытия процентов: {stock.interestCoverageTTM}</li>
          <li>
            Отношение денежного потока к долгу: {stock.cashFlowToDebtRatioTTM}
          </li>
          <li>
            Мультипликатор собственного капитала:{" "}
            {stock.companyEquityMultiplierTTM}
          </li>
          <li>
            Коэффициент оборачиваемости дебиторской задолжнности:{" "}
            {stock.receivablesTurnoverTTM}{" "}
          </li>
          <li>
            Коэффициент оборачиваемости запасов: {stock.inventoryTurnoverTTM}
          </li>
          <li>
            Оборот активов в ходе хозяйственной деятельности:{" "}
            {stock.fixedAssetTurnoverTTM}{" "}
          </li>
          <li>
            Операционный денежный поток на акцию:{" "}
            {stock.operatingCashFlowPerShareTTM}
          </li>
          <li>
            Свободный денежный поток на акцию: {stock.freeCashFlowPerShareTTM}
          </li>
          <li>Денежный поток на акцию: {stock.cashPerShareTTM}</li>
          <li>
            Операционный денежный поток / коэффициент продаж:{" "}
            {stock.operatingCashFlowSalesRatioTTM}
          </li>
          <li>P/OCF: {stock.freeCashFlowOperatingCashFlowRatioTTM}</li>
          <li>
            Отношение денежного потока к долгу:{" "}
            {stock.cashFlowCoverageRatiosTTM}
          </li>
          <li>P/B: {stock.priceBookValueRatioTTM}</li>
          <li>P/S: {stock.priceToSalesRatioTTM}</li>
          <li>P/FCF: {stock.priceToFreeCashFlowsRatioTTM}</li>
          <li>Дивидендная доходность: {stock.dividendYieldTTM}</li>
          <li>Справедливая стоимость: {stock.priceFairValueTTM}</li>
          <li>DPS: {stock.dividendPerShareTTM}</li>
        </ol>
      ))}
    </div>
  );
};

export default CompanyFinancial;

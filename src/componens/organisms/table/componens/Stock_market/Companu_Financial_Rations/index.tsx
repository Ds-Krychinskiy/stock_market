import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

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

interface ICompanyFRProps {
  tiker: string;
}

const CompanyFR: React.FC<ICompanyFRProps> = ({ tiker }) => {
  const [stocks, setStocks] = useState<ITSStocks[]>([]);

  useEffect(() => {
    axios
      .get(`ratios-ttm/${tiker}`)
      .then((response) => setStocks(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {stocks.map((e) => (
        <>
          <p>P/E: {e.peRatioTTM}</p>
          <p>PEG: {e.pegRatioTTM}</p>
          <p>Коэффициент выплат: {e.payoutRatioTTM}</p>
          <p>Коэффициент текущей ликвидности: {e.currentRatioTTM}</p>
          <p>Дивидендная доходность: {e.dividendYielTTM}</p>
          <p>Коэффициент выплат: {e.payoutRatioTTM}</p>
          <p>Оборачиваемость оборотного капитала: {e.operatingCycleTTM}</p>
          <p>Количество дней до конца продаж: {e.daysOfSalesOutstandingTTM}</p>
          <p>Оборачиваемость оборотного капитала: {e.operatingCycleTTM}</p>
          <p>Количество дней к оплате: {e.daysOfPayablesOutstandingTTM}</p>
          <p>Цикл конвертации наличных денег: {e.cashConversionCycleTTM}</p>
          <p>Валовая прибыль: {e.grossProfitMarginTTM}</p>
          <p>Маржа опарационнаой прибыли: {e.operatingProfitMarginTTM}</p>
          <p>Маржа прибыли до налогообложения: {e.pretaxProfitMarginTTM}</p>
          <p>Маржа чистой прибыли: {e.netProfitMarginTTM}</p>
          <p>Эффективная нологовая ставка: {e.effectiveTaxRateTTM}</p>
          <p>ROA: {e.returnOnAssetsTTM}</p>
          <p>ROE: {e.returnOnEquityTTM}</p>
          <p>Доход на вложенный капитал: {e.returnOnCapitalEmployedTTM}</p>
          <p>EBIT/EV: {e.ebtPerEbitTTM}</p>
          <p>D/E: {e.debtRatioTTM}</p>
          <p>
            Отношение долгосрочной задолженности к капитализации:{" "}
            {e.longTermDebtToCapitalizationTTM}
          </p>
          <p>Коэффициент покрытия процентов: {e.interestCoverageTTM}</p>
          <p>Отношение денежного потока к долгу: {e.cashFlowToDebtRatioTTM}</p>
          <p>
            Мультипликатор собственного капитала: {e.companyEquityMultiplierTTM}
          </p>
          <p>
            Коэффициент оборачиваемости дебиторской задолжнности:{" "}
            {e.receivablesTurnoverTTM}
          </p>
          <p>Коэффициент оборачиваемости запасов: {e.inventoryTurnoverTTM}</p>
          <p>
            Оборот активов в ходе хозяйственной деятельности:{" "}
            {e.fixedAssetTurnoverTTM}
          </p>
          <p>
            Операционный денежный поток на акцию:{" "}
            {e.operatingCashFlowPerShareTTM}
          </p>
          <p>Свободный денежный поток на акцию: {e.freeCashFlowPerShareTTM}</p>
          <p>Денежный поток на акцию: {e.cashPerShareTTM}</p>
          <p>
            Операционный денежный поток / коэффициент продаж:{" "}
            {e.operatingCashFlowSalesRatioTTM}
          </p>
          <p>P/OCF: {e.freeCashFlowOperatingCashFlowRatioTTM}</p>
          <p>
            Отношение денежного потока к долгу: {e.cashFlowCoverageRatiosTTM}
          </p>
          <p>P/B: {e.priceBookValueRatioTTM}</p>
          <p>P/S: {e.priceToSalesRatioTTM}</p>
          <p>P/FCF: {e.priceToFreeCashFlowsRatioTTM}</p>
          <p>Дивидендная доходность: {e.dividendYieldTTM}</p>
          <p>Справедливая стоимость: {e.priceFairValueTTM}</p>
          <p>DPS: {e.dividendPerShareTTM}</p>
        </>
      ))}
    </div>
  );
};
export default CompanyFR;

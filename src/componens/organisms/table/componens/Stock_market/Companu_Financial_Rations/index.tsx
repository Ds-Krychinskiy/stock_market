import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
import Typography from "../../../../../atoms/typography";

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
          <Typography>P/E: {e.peRatioTTM}</Typography>
          <Typography>PEG: {e.pegRatioTTM}</Typography>
          <Typography>Коэффициент выплат: {e.payoutRatioTTM}</Typography>
          <Typography>Коэффициент текущей ликвидности: {e.currentRatioTTM}</Typography>
          <Typography>Дивидендная доходность: {e.dividendYielTTM}</Typography>
          <Typography>Коэффициент выплат: {e.payoutRatioTTM}</Typography>
          <Typography>Оборачиваемость оборотного капитала: {e.operatingCycleTTM}</Typography>
          <Typography>Количество дней до конца продаж: {e.daysOfSalesOutstandingTTM}</Typography>
          <Typography>Оборачиваемость оборотного капитала: {e.operatingCycleTTM}</Typography>
          <Typography>Количество дней к оплате: {e.daysOfPayablesOutstandingTTM}</Typography>
          <Typography>Цикл конвертации наличных денег: {e.cashConversionCycleTTM}</Typography>
          <Typography>Валовая прибыль: {e.grossProfitMarginTTM}</Typography>
          <Typography>Маржа опарационнаой прибыли: {e.operatingProfitMarginTTM}</Typography>
          <Typography>Маржа прибыли до налогообложения: {e.pretaxProfitMarginTTM}</Typography>
          <Typography>Маржа чистой прибыли: {e.netProfitMarginTTM}</Typography>
          <Typography>Эффективная нологовая ставка: {e.effectiveTaxRateTTM}</Typography>
          <Typography>ROA: {e.returnOnAssetsTTM}</Typography>
          <Typography>ROE: {e.returnOnEquityTTM}</Typography>
          <Typography>Доход на вложенный капитал: {e.returnOnCapitalEmployedTTM}</Typography>
          <Typography>EBIT/EV: {e.ebtPerEbitTTM}</Typography>
          <Typography>D/E: {e.debtRatioTTM}</Typography>
          <Typography>
            Отношение долгосрочной задолженности к капитализации:{" "}
            {e.longTermDebtToCapitalizationTTM}
          </Typography>
          <Typography>Коэффициент покрытия процентов: {e.interestCoverageTTM}</Typography>
          <Typography>Отношение денежного потока к долгу: {e.cashFlowToDebtRatioTTM}</Typography>
          <Typography>
            Мультипликатор собственного капитала: {e.companyEquityMultiplierTTM}
          </Typography>
          <Typography>
            Коэффициент оборачиваемости дебиторской задолжнности:{" "}
            {e.receivablesTurnoverTTM}
          </Typography>
          <Typography>Коэффициент оборачиваемости запасов: {e.inventoryTurnoverTTM}</Typography>
          <Typography>
            Оборот активов в ходе хозяйственной деятельности:{" "}
            {e.fixedAssetTurnoverTTM}
          </Typography>
          <Typography>
            Операционный денежный поток на акцию:{" "}
            {e.operatingCashFlowPerShareTTM}
          </Typography>
          <Typography>Свободный денежный поток на акцию: {e.freeCashFlowPerShareTTM}</Typography>
          <Typography>Денежный поток на акцию: {e.cashPerShareTTM}</Typography>
          <Typography>
            Операционный денежный поток / коэффициент продаж:{" "}
            {e.operatingCashFlowSalesRatioTTM}
          </Typography>
          <Typography>P/OCF: {e.freeCashFlowOperatingCashFlowRatioTTM}</Typography>
          <Typography>
            Отношение денежного потока к долгу: {e.cashFlowCoverageRatiosTTM}
          </Typography>
          <Typography>P/B: {e.priceBookValueRatioTTM}</Typography>
          <Typography>P/S: {e.priceToSalesRatioTTM}</Typography>
          <Typography>P/FCF: {e.priceToFreeCashFlowsRatioTTM}</Typography>
          <Typography>Дивидендная доходность: {e.dividendYieldTTM}</Typography>
          <Typography>Справедливая стоимость: {e.priceFairValueTTM}</Typography>
          <Typography>DPS: {e.dividendPerShareTTM}</Typography>
        </>
      ))}
    </div>
  );
};
export default CompanyFR;

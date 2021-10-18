import { useState, useEffect} from "react";
import * as React from 'react';

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
  tiker: string;
}

const CompanyFinancial: React.FC<ICompanyFinancialProps> = ({
  stocks,
  tiker,
}) => {
  const [showTable, setShowTable] = useState(false);
  console.log("CompanyFinancial")
  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    ShowTable();
  }, [tiker]);

  
  return (
    <>
      {showTable && (
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>{tiker}</TableCell>
            </TableRow>
          </TableHead>
          {stocks.map((stock) => (
            <TableBody>
              <TableRow>
                <TableCell>
                
                
      
                  <p>P/E: {stock.peRatioTTM}</p>
                  <p>PEG: {stock.pegRatioTTM}</p>
                  <p>Коэффициент выплат: {stock.payoutRatioTTM}</p>
                  <p>
                    Коэффициент текущей ликвидности: {stock.currentRatioTTM}
                  </p>
                  <p>Дивидендная доходность: {stock.dividendYielTTM}</p>
                  <p>Коэффициент выплат: {stock.payoutRatioTTM}</p>
                  <p>
                    Оборачиваемость оборотного капитала:{" "}
                    {stock.operatingCycleTTM}
                  </p>
                  <p>
                    Количество дней до конца продаж:{" "}
                    {stock.daysOfSalesOutstandingTTM}
                  </p>
                  <p>
                    Оборачиваемость оборотного капитала:{" "}
                    {stock.operatingCycleTTM}
                  </p>
                  <p>
                    Количество дней к оплате:{" "}
                    {stock.daysOfPayablesOutstandingTTM}
                  </p>
                  <p>
                    Цикл конвертации наличных денег:{" "}
                    {stock.cashConversionCycleTTM}
                  </p>
                  <p>Валовая прибыль: {stock.grossProfitMarginTTM}</p>
                  <p>
                    Маржа опарационнаой прибыли:{" "}
                    {stock.operatingProfitMarginTTM}
                  </p>
                  <p>
                    Маржа прибыли до налогообложения:{" "}
                    {stock.pretaxProfitMarginTTM}
                  </p>
                  <p>Маржа чистой прибыли: {stock.netProfitMarginTTM}</p>
                  <p>
                    Эффективная нологовая ставка: {stock.effectiveTaxRateTTM}
                  </p>
                  <p>ROA: {stock.returnOnAssetsTTM}</p>
                  <p>ROE: {stock.returnOnEquityTTM}</p>
                  <p>
                    Доход на вложенный капитал:{" "}
                    {stock.returnOnCapitalEmployedTTM}
                  </p>
                  <p>EBIT/EV: {stock.ebtPerEbitTTM}</p>
                  <p>D/E: {stock.debtRatioTTM}</p>
                  <p>
                    Отношение долгосрочной задолженности к капитализации:{" "}
                    {stock.longTermDebtToCapitalizationTTM}
                  </p>
                  <p>
                    Коэффициент покрытия процентов: {stock.interestCoverageTTM}
                  </p>
                  <p>
                    Отношение денежного потока к долгу:{" "}
                    {stock.cashFlowToDebtRatioTTM}
                  </p>
                  <p>
                    Мультипликатор собственного капитала:{" "}
                    {stock.companyEquityMultiplierTTM}
                  </p>
                  <p>
                    Коэффициент оборачиваемости дебиторской задолжнности:{" "}
                    {stock.receivablesTurnoverTTM}
                  </p>
                  <p>
                    Коэффициент оборачиваемости запасов:{" "}
                    {stock.inventoryTurnoverTTM}
                  </p>
                  <p>
                    Оборот активов в ходе хозяйственной деятельности:{" "}
                    {stock.fixedAssetTurnoverTTM}
                  </p>
                  <p>
                    Операционный денежный поток на акцию:{" "}
                    {stock.operatingCashFlowPerShareTTM}
                  </p>
                  <p>
                    Свободный денежный поток на акцию:{" "}
                    {stock.freeCashFlowPerShareTTM}
                  </p>
                  <p>Денежный поток на акцию: {stock.cashPerShareTTM}</p>
                  <p>
                    Операционный денежный поток / коэффициент продаж:{" "}
                    {stock.operatingCashFlowSalesRatioTTM}
                  </p>
                  <p>P/OCF: {stock.freeCashFlowOperatingCashFlowRatioTTM}</p>
                  <p>
                    Отношение денежного потока к долгу:{" "}
                    {stock.cashFlowCoverageRatiosTTM}
                  </p>
                  <p>P/B: {stock.priceBookValueRatioTTM}</p>
                  <p>P/S: {stock.priceToSalesRatioTTM}</p>
                  <p>P/FCF: {stock.priceToFreeCashFlowsRatioTTM}</p>
                  <p>Дивидендная доходность: {stock.dividendYieldTTM}</p>
                  <p>Справедливая стоимость: {stock.priceFairValueTTM}</p>
                  <p>DPS: {stock.dividendPerShareTTM}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}
    </>
  );
};

export default CompanyFinancial;

import { useState, useEffect } from "react";
import axios from "../../../axios";

interface IFinancialRatios {
  date: string;
  symbol: string;
  reportedCurrency: string;
  acceptedDate: string;
  period: string;
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  grossProfitRatio: number;
  researchAndDevelopmentExpenses: number;
  generalAndAdministrativeExpenses: number;
  sellingAndMarketingExpenses: number;
  sellingGeneralAndAdministrativeExpenses: number;
  otherExpenses: number;
  operatingExpenses: number;
  costAndExpenses: number;
  interestExpense: number;
  depreciationAndAmortization: number;
  ebitda: number;
  ebitdaratio: number;
  operatingIncome: number;
  operatingIncomeRatio: number;
  totalOtherIncomeExpensesNet: number;
  incomeBeforeTax: number;
  incomeBeforeTaxRatio: number;
  incomeTaxExpense: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  finalLink: string;
}

interface ICompanyFS {
  tiker: string;
}

const CompanyFS: React.FC<ICompanyFS> = ({ tiker }) => {
  const [finance, setFinance] = useState<IFinancialRatios[]>([]);

  useEffect(() => {
    axios
        .get(`income-statement/${tiker}?limit=10`)
        .then((response) => setFinance(response.data))
        .catch((error) => {
          console.log("Sorry, Bro");
        });
  }, [tiker]);

  return (
    <>
      {finance.map((e) => (
        <div>
          {e.symbol}
          <ol>
            <li>Дата публикации отчёта: {e.finalLink}</li>
            <li>Валюта отчётности: {e.reportedCurrency}</li>
            <li>Отчётный период: {e.period}</li>
            <li>Доход: {e.revenue}</li>
            <li>Валовой доход: {e.grossProfit}</li>
            <li>Коэффициент валовой прибыли: {e.grossProfitRatio} </li>
            <li>
              Расходы на исследование и разработки:{" "}
              {e.researchAndDevelopmentExpenses}
            </li>
            <li>
              Общие и административные расходы:{" "}
              {e.generalAndAdministrativeExpenses}
            </li>
            <li>Расходы на продажу: {e.sellingAndMarketingExpenses}</li>
            <li>Опарационные расходы: {e.operatingExpenses}</li>
            <li>износ и амортизация: {e.depreciationAndAmortization}</li>
            <li>Прочие расходы: {e.otherExpenses}</li>
            <li>Ebitda: {e.ebitda}</li>
            <li>Операционная прибыль: {e.operatingIncome}</li>
            <li>Операционная маржа: {e.operatingIncomeRatio}</li>
            <li>прочие доходы: {e.totalOtherIncomeExpensesNet}</li>
            <li>Доход до налогообложения: {e.incomeBeforeTax}</li>
            <li>Расходы по налогу на прибыль: {e.incomeTaxExpense}</li>
            <li>Чистая прибыль: {e.netIncome}</li>
            <li>Коэффициент чистой прибыли: {e.netIncomeRatio}</li>
            <li>Прибыль на акцию: {e.eps}</li>
            <li>Ссылка на отчёт: {e.finalLink}</li>
          </ol>
        </div>
      ))}
    </>
  );
};
export default CompanyFS;

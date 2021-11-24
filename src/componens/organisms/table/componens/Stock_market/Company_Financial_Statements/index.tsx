import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";
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
    <div>
      {finance.map((e) => (
        <>
          <p>Дата публикации отчёта: {e.date}</p>
          <p>Валюта отчётности: {e.reportedCurrency}</p>
          <p>Отчётный период: {e.period}</p>
          <p>Доход: {e.revenue}</p>
          <p>Валовой доход: {e.grossProfit}</p>
          <p>Коэффициент валовой прибыли: {e.grossProfitRatio} </p>
          <p>
            Расходы на исследование и разработки:{" "}
            {e.researchAndDevelopmentExpenses}
          </p>
          <p>
            Общие и административные расходы:{" "}
            {e.generalAndAdministrativeExpenses}
          </p>
          <p>Расходы на продажу: {e.sellingAndMarketingExpenses}</p>
          <p>Опарационные расходы: {e.operatingExpenses}</p>
          <p>износ и амортизация: {e.depreciationAndAmortization}</p>
          <p>Прочие расходы: {e.otherExpenses}</p>
          <p>Ebitda: {e.ebitda}</p>
          <p>Операционная прибыль: {e.operatingIncome}</p>
          <p>Операционная маржа: {e.operatingIncomeRatio}</p>
          <p>прочие доходы: {e.totalOtherIncomeExpensesNet}</p>
          <p>Доход до налогообложения: {e.incomeBeforeTax}</p>
          <p>Расходы по налогу на прибыль: {e.incomeTaxExpense}</p>
          <p>Чистая прибыль: {e.netIncome}</p>
          <p>Коэффициент чистой прибыли: {e.netIncomeRatio}</p>
          <p>Прибыль на акцию: {e.eps}</p>
          <p>
            Ссылка на отчёт:{" "}
            <a href={e.finalLink} target="blank">
              {e.finalLink}
            </a>
          </p>
        </>
      ))}
    </div>
  );
};
export default CompanyFS;

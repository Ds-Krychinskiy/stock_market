import { useState, useEffect } from "react";
import axios from "../../../axios";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";

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
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`income-statement/${tiker}?limit=10`)
      .then((response) => setFinance(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
    ShowTable();
  }, [tiker]);

  return (
    <>
      {showTable && (
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Company Financial Statements</TableCell>
            </TableRow>
          </TableHead>
          {finance.map((e) => (
            <TableBody>
              <TableRow>
                <TableCell>
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
                    <a href={e.finalLink} target="_blank">
                      {e.finalLink}
                    </a>
                  </p>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}
    </>
  );
};

export default CompanyFS;

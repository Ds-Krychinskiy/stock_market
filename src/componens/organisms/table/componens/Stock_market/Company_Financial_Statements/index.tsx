import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { TableWrapper, Wrapper } from "../../Stock_Screener/style";
import { TypographyStyle } from "../../../../../atoms/typography/style";

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      {finance[0] ? (
        <>
          <TableWrapper>
            <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <TableContainer>
                <TableWrapper>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ justifyContent: "space-between" }}>
                          <TypographyStyle>Результат поиска</TypographyStyle>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <Wrapper>
                        {finance
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((e) => (
                            <TableRow hover role="checkbox" tabIndex={-1}>
                              <TableCell key={e.symbol}>
                                <TypographyStyle>
                                  Дата публикации отчёта: {e.date}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Валюта отчётности: {e.reportedCurrency}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Отчётный период: {e.period}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Доход: {e.revenue}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Валовой доход: {e.grossProfit}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Коэффициент валовой прибыли:{" "}
                                  {e.grossProfitRatio}{" "}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Расходы на исследование и разработки:
                                  {e.researchAndDevelopmentExpenses}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Общие и административные расходы:{" "}
                                  {e.generalAndAdministrativeExpenses}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Расходы на продажу:{" "}
                                  {e.sellingAndMarketingExpenses}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Опарационные расходы: {e.operatingExpenses}
                                </TypographyStyle>
                                <TypographyStyle>
                                  износ и амортизация:{" "}
                                  {e.depreciationAndAmortization}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Прочие расходы: {e.otherExpenses}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Ebitda: {e.ebitda}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Операционная прибыль: {e.operatingIncome}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Операционная маржа: {e.operatingIncomeRatio}
                                </TypographyStyle>
                                <TypographyStyle>
                                  прочие доходы: {e.totalOtherIncomeExpensesNet}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Доход до налогообложения: {e.incomeBeforeTax}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Расходы по налогу на прибыль:{" "}
                                  {e.incomeTaxExpense}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Чистая прибыль: {e.netIncome}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Коэффициент чистой прибыли: {e.netIncomeRatio}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Прибыль на акцию: {e.eps}
                                </TypographyStyle>
                                <TypographyStyle>
                                  Ссылка на отчёт:{" "}
                                  <a href={e.finalLink} target="blank">
                                    {e.finalLink}
                                  </a>
                                </TypographyStyle>
                              </TableCell>
                            </TableRow>
                          ))}
                      </Wrapper>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={finance.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </TableWrapper>
        </>
      ) : null}
    </>
  );
};
export default CompanyFS;

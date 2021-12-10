import React, { useState } from "react";
import { TypographyStyle } from "../../../../atoms/typography/style";
import { IScreenerProps } from "../../../../templates/stock_screener";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { TableScreener, TableWrapper, Wrapper } from "../../style";

interface IScreenerTablProps {
  screener: IScreenerProps[];
}

const StockScreenerTable: React.FC<IScreenerTablProps> = ({ screener }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {screener[0] ? (
        <>
          <TableWrapper>
            <Paper
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                color: "#f26b38",
                backgroundColor: "black",
              }}
            >
              <TableContainer>
                <TableWrapper>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            backgroundColor: "black",
                            display: "flex",
                            justifyContent: "center",
                            border: "3px solid #f26b38",
                          }}
                        >
                          <TypographyStyle>Результат поиска</TypographyStyle>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <Wrapper>
                        {screener
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((el) => (
                            <TableRow hover role="checkbox" tabIndex={-1}>
                              <TableCell
                                key={el.symbol}
                                sx={{ border: "none" }}
                              >
                                <TableScreener>
                                  <TypographyStyle>
                                    {el.companyName}
                                  </TypographyStyle>
                                  <TypographyStyle>{el.symbol}</TypographyStyle>
                                  <TypographyStyle>
                                    {el.marketCap}
                                  </TypographyStyle>
                                  <TypographyStyle>{el.price}</TypographyStyle>
                                  <TypographyStyle>{el.beta}</TypographyStyle>
                                  <TypographyStyle>
                                    {el.exchangeShortName}
                                  </TypographyStyle>
                                  <TypographyStyle>{el.sector}</TypographyStyle>
                                  <TypographyStyle>
                                    дивиденды {el.lastAnnualDividend}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    страна: {el.country}
                                  </TypographyStyle>
                                </TableScreener>
                              </TableCell>
                            </TableRow>
                          ))}
                      </Wrapper>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </TableContainer>
              <TablePagination
                sx={{ color: "#f26b38", border: "1px solid #f26b38" }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={screener.length}
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

export default StockScreenerTable;

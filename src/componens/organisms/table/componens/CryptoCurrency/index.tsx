import React, { useEffect, useState } from "react";
import axios from "../../../../../axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { TypographyStyle } from "../../../../atoms/typography/style";
import { TableScreener, TableWrapper, Wrapper } from "../../style";

interface IPriceCryptoCurrencyProps {
  tiker: string;
}

interface IPriceCryptoCurrency {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

const PriceCryptoCurrency: React.FC<IPriceCryptoCurrencyProps> = ({
  tiker,
}) => {
  const [price, setPrice] = useState<IPriceCryptoCurrency[]>([]);

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

  useEffect(() => {
    axios
      .get(`historical-chart/5min/${tiker}?`)
      .then((response) => setPrice(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {price ? (
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
                        {price
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((el) => (
                            <TableRow hover role="checkbox" tabIndex={-1}>
                              <TableCell key={el.date} sx={{ border: "none" }}>
                                <TableScreener>
                                  <TypographyStyle>
                                    Дата: {el.date}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    Цена открытия: {el.open}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    Максимальная цена за день: {el.high}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    Минимальная цена за день:{el.low}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    Цена закрытия: {el.close}
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
                count={price.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </TableWrapper>
        </>
      ) : null}
    </div>
  );
};
export default PriceCryptoCurrency;

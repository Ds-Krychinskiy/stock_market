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
import { TypographyStyle } from "../../../../../atoms/typography/style";
import { TableWrapper, Wrapper } from "../../../style";


interface ISecFilings {
  symbol: string;
  acceptedDate: string;
  type: string;
  finalLink: string;
}

interface ISecFilingsProps {
  tiker: string;
}

const SecFilings: React.FC<ISecFilingsProps> = ({ tiker }) => {
  const [filings, setFilings] = useState<ISecFilings[]>([]);
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
      .get(`sec_filings/${tiker}?limit=100`)
      .then((response) => setFilings(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);

  return (
    <>
      {filings[0] ? (
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
                        {filings
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((el) => (
                            <TableRow hover role="checkbox" tabIndex={-1}>
                              <TableCell key={el.symbol}>
                                
                                  <TypographyStyle>
                                    Дата публикации отчёта: {el.acceptedDate}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    Форма отчёта: {el.type}
                                  </TypographyStyle>
                                  <TypographyStyle>
                                    Ссылка на отчёт:
                                    <a href={el.finalLink} target="blank">
                                      {el.finalLink}
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
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filings.length}
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
export default SecFilings;

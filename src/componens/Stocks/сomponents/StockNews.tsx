import axios from "../../../axios";
import { useState, useEffect, } from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { TableBody, TablePagination } from "@material-ui/core";

interface IStockNews {
  symbol: string;
  publishedDate: string;
  title: string;
  text: string;
  url: string;
}

interface IStockNewsProps {
  tiker: string;
}

const StockNews: React.FC<IStockNewsProps> = ({ tiker }) => {
  const [news, setNews] = useState<IStockNews[]>([]);
  const [showTable, setShowTable] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`stock_news?tickers=${tiker}&limit=50&`)
      .then((response) => setNews(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
    ShowTable();
  }, [tiker]);

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
      {showTable && (
        <>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>{tiker}</TableCell>
              </TableRow>
            </TableHead>
            {news.map((e) => (
              <TableBody>
                <TableRow>
                  <TableCell>
                    <p>Дата публикации: {e.publishedDate}</p>
                    <p>{e.title}</p>
                    <p>{e.text}</p>
                    <a href={e.url}>{e.url}</a>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            count={news.length}
            component="div"
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </>
  );
};

export default StockNews;

import { useState, useEffect } from "react";
import axios from "../../../axios";

import * as React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";

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
      .get(`sec_filings/${tiker}?limit=100`)
      .then((response) => setFilings(response.data))
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
                <TableCell>
                  <p>{tiker}</p>
                </TableCell>
              </TableRow>
            </TableHead>
            {filings.map((e) => (
              <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell>
                    <p>Дата публикации отчёта: {e.acceptedDate}</p>
                    <p>Форма отчёта: {e.type}</p>
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
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            count={filings.length}
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
export default SecFilings;

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import { OneCompanyProps } from "../../../state/Stock_Screener_State/interface";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import { Typography } from "../../atoms/typograhy";
interface TableProps {
  state: () => JSX.Element;
  list: OneCompanyProps[];
}

const Tables: React.FC<TableProps> = ({ state, list }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                <Typography size={"1.2em"}>Результат поиска...</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ display: "flex", justifyContent: "center" }}>
            {(rowsPerPage > 0
              ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : list) && state()}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Tables;

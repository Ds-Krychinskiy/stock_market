import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import { useState, useEffect } from "react";

import { ITSEtf } from "../TSEtf";

interface IListETFProps {
  etf: ITSEtf[];
  tiker: string;
}

const ListETF: React.FC<IListETFProps> = ({ etf, tiker }) => {
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    ShowTable();
  }, [tiker]);

  return (
    <>
      {showTable && (
        <div>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>ETF list</TableCell>
              </TableRow>
            </TableHead>
            {etf
              .filter((el) => el.symbol === `${tiker}`)
              .map((el) => (
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                        <p>Тикер: {el.symbol}</p>
                        <p>Название фонда: {el.name}</p>
                        <p>Цена: {el.price}</p>
                        <p>Биржа: {el.exchange}</p>
                        <p>тип: {el.type}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </div>
      )}
    </>
  );
};
export default ListETF;

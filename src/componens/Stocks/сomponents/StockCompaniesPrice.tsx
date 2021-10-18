import { useState, useEffect } from "react";
import axios from "../../../axios";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
interface IStockCP {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

interface IStockCPProps {
  tiker: string;
}

const StockCompaniesPrice: React.FC<IStockCPProps> = ({ tiker }) => {
  console.log("StockCompaniesPrice");
  const [price, setPrice] = useState<IStockCP[]>([]);
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`quote/${tiker}?`)
      .then((response) => setPrice(response.data))
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {price.map((el) => (
            <TableBody>
              <TableRow>
                <TableCell>
                  <p>Цена одной акции: {el.price}</p>
                  <p>Цена на открытие торгов: {el.open}</p>
                  <p>Минимальная цена за день: {el.dayLow}</p>
                  <p>Максимльная цена за день: {el.dayHigh}</p>
                  <p>Минимальная цена за год: {el.yearLow}</p>
                  <p>Максимльная цена за год: {el.yearHigh}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}
    </>
  );
};
export default StockCompaniesPrice;

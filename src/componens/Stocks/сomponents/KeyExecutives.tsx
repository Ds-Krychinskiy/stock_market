import axios from "../../../axios";
import { useState, useEffect } from "react";
import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
interface IKeyExecutives {
  symbol: string;
  yearBorn: number;
  pay: number;
  currencyPay: string;
  name: string;
  title: string;
  gender: string;
  titleSince?: string;
}

interface IKeyExecutivesProps {
  tiker: string;
}

const KeyExecutives: React.FC<IKeyExecutivesProps> = ({ tiker }) => {
  const [executives, setExecutives] = useState<IKeyExecutives[]>([]);
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`key-executives/${tiker}?`)
      .then((response) => setExecutives(response.data))
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
              <TableCell>{tiker}</TableCell>
            </TableRow>
          </TableHead>
          {executives.map((e) => (
            <TableBody>
              <TableRow>
                <TableCell>
                  <p>Должность: {e.title}</p>
                  <p>Имя: {e.name}</p>
                  <p>Пол: {e.gender}</p>
                  <p>Год рождения: {e.yearBorn}</p>
                  <p>Дата вступление в должность: {e.titleSince}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}
    </>
  );
};

export default KeyExecutives;

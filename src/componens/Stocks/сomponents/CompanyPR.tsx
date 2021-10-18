import { useState, useEffect } from "react";
import axios from "../../../axios";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import React from "react";

interface ICompanyPR {
  symbol: string;
  companyName: string;
  price: number;
  sector: string;
  state: string;
  city: string;
  ceo: string;
  description: string;
  website: string;
  exchange: string;
  ipoDate: string;
}

interface ICompanyPRProps {
  tiker: string;
}

const CompanyProfile: React.FC<ICompanyPRProps> = ({ tiker }) => {
  const [profils, setProfile] = useState<ICompanyPR[]>([]);
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`profile/${tiker}`)
      .then((response) => setProfile(response.data))
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
          {profils.map((el) => (
            <TableBody>
              <TableRow>
                <TableCell>
                  <p>Цена одной акции: {el.price}</p>
                  <p>Сектор работы компании: {el.sector}</p>
                  <p>Штат: {el.state}</p>
                  <p>Город: {el.city}</p>
                  <p>CEO: {el.ceo}</p>
                  <p>Описание: {el.description}</p>
                  <p>
                    Cайт:
                    <a href={el.website} target="_blank">
                      {el.website}
                    </a>
                  </p>
                  <p>
                    Биржа, на которой торгуются ценные бумаги компании:
                    {el.exchange}
                  </p>
                  <p>Дата публичного размещения компании: {el.ipoDate}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}
    </>
  );
};

export default React.memo(CompanyProfile);

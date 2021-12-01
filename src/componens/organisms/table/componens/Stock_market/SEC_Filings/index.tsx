import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

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
  useEffect(() => {
    axios
      .get(`sec_filings/${tiker}?limit=100`)
      .then((response) => setFilings(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, [tiker]);
  return (
    <div>
      {filings.map((e) => (
        <>
          <p>Дата публикации отчёта: {e.acceptedDate}</p>
          <p>Форма отчёта: {e.type}</p>
          <p>
            Ссылка на отчёт:{" "}
            <a href={e.finalLink} target="blank">
              {e.finalLink}
            </a>
          </p>
        </>
      ))}
    </div>
  );
};
export default SecFilings;

import { useState, useEffect } from "react";
import axios from "../../../axios";

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
    .get(`sec_filings/${tiker}?limit=500`)
    .then((response) => setFilings(response.data))
    .catch((error) => {
      console.log("Sorry, Bro");
    });
  }, [tiker]);

  return (
    <div>
      {filings.map((filing) => (
        <ol>
          <span>{filing.symbol}</span>
          <span>{filing.acceptedDate}</span>
          <span>{filing.type}</span>
          <span>{filing.finalLink}</span>
        </ol>
      ))}
    </div>
  );
};
export default SecFilings;

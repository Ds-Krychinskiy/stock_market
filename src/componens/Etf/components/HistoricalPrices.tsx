import { useState, useEffect } from "react";
import axios from "../../../axios";

interface IFundHolders {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
}

interface IFundHoldersProps {
  tiker: string;
}

const HistoricalPrices: React.FC<IFundHoldersProps> = ({ tiker }) => {
  const [prices, setPrices] = useState<IFundHolders[]>([]);
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`historical-chart/4hour/${tiker}?`)
      .then((response) => setPrices(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
    ShowTable();
  }, [tiker]);

  return (
    <>
      {showTable && (
        <div>
          {prices.map((el) => (
            <div>
              {tiker}
              <p>{el.date}</p>
              <p>{el.open}</p>
              <p>{el.low}</p>
              <p>{el.high}</p>
              <p>{el.close}</p>
              <p>{el.volume}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HistoricalPrices;

import { useState, useEffect } from "react";
import axios from "../../../axios";

interface ISectorWeightings {
  sector: string;
  weightPercentage: string;
}

interface ISectorWeightingsProps {
  tiker: string;
}

const SectorWeightings: React.FC<ISectorWeightingsProps> = ({ tiker }) => {
  const [sector, setSector] = useState<ISectorWeightings[]>([]);
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!tiker === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    axios
      .get(`etf-sector-weightings/${tiker}?`)
      .then((response) => setSector(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
    ShowTable();
  }, [tiker]);

  return (
    <>
      {showTable && (
        <div>
          {sector.map((el) => (
            <div>
              <p>Сектор экономики: {el.sector}</p>
              <p>Вес в фонде: {el.weightPercentage}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectorWeightings;

import React, { useEffect, useState } from "react";
import axios from "../../../../../../axios";

interface ISectorWeightings {
  sector: string;
  weightPercentage: string;
}
interface ISectorWeightingsProps {
  tiker: string;
}
const SectorWeightings: React.FC<ISectorWeightingsProps> = ({ tiker }) => {
  const [sector, setSector] = useState<ISectorWeightings[]>([]);
  useEffect(() => {
    axios
      .get(`etf-sector-weightings/${tiker}?`)
      .then((response) => setSector(response.data))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, []);

  return (
    <div>
      {sector.map((el) => (
        <div>
          <p>Сектор экономики: {el.sector}</p>
          <p>Вес в фонде: {el.weightPercentage}</p>
        </div>
      ))}
    </div>
  );
};
export default SectorWeightings;

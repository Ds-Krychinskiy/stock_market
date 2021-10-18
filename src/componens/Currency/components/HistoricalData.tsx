import { ContactsOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "../../../axios";

interface IHistoricalPricaProps {
  fx: string;
}

interface IHistoricalData {
  open: number;
  high: number;
  low: number;
  close: number;
}

const HistoricalData: React.FC<IHistoricalPricaProps> = ({ fx }) => {
  const [prices, setPrice] = useState<IHistoricalData[]>([]);
  const [showTable, setShowTable] = useState(false);

  const ShowTable = () => {
    if (!!fx === true) {
      setShowTable((el) => !el);
    }
  };

  useEffect(() => {
    const onAdd = (fx: string) => {
      axios
        .get(`historical-chart/4hour/${fx}?`)
        .then((response) => setPrice(response.data))
        .catch((error) => {
          console.log("Sorry, Bro");
        });
    };
    onAdd(fx);
  }, [fx]);

  return (
    <>
      {showTable && (
        <div>
          {prices.map((price) => (
            <ol>
              <li>Тикер валютной пары: {fx}</li>
              <li>Цена открытия: {price.open}</li>
              <li>Наибольшая цена: {price.high}</li>
              <li>Наименьшая цена: {price.low}</li>
              <li>Цена закрытия: {price.close}</li>
            </ol>
          ))}
        </div>
      )}
    </>
  );
};
export default HistoricalData;

import React from "react";
import CryptoCurrency from "./cryptocurrency";
import Currency from "./currency";
import Etf from "./etf";
import StockMarket from "./stock_market";

interface IStockMarkerProps {
  variant: "stock" | "etf" | "currency" | "cryptocurrency";
}

const Templates: React.FC<IStockMarkerProps> = ({ variant }) => {
  switch (variant) {
    case "stock":
      return (
        <div>
          <StockMarket />
        </div>
      );
    case "etf":
      return (
        <div>
          <Etf />
        </div>
      );

    case "currency":
      return (
        <div>
          <Currency />
        </div>
      );
    case "cryptocurrency":
      return (
        <div>
          <CryptoCurrency />
        </div>
      );
  }
};
export default Templates;

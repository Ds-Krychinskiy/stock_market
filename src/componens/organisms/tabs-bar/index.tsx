import React from "react";
import Currency from "./componens/Currency";
import Etf from "./componens/Etf";
import StockMarket from "./componens/Stock_Market";

interface ITabsBarProps {
  variant: "stock" | "etf" | "currency" | "cryptocurrency";
}

const TabsBar: React.FC<ITabsBarProps> = ({ variant }) => {
  switch (variant) {
    case "stock":
      return <StockMarket />;
    case "etf":
      return <Etf />;
    case "currency":
      return <Currency />;
    case "cryptocurrency":
      return <div></div>;
  }
};
export default TabsBar;

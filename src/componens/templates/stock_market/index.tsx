import React from "react";
import InputMolecule from "../../molecules/input";
import TabsBar from "../../organisms/tabs-bar";

interface IStockMarkerProps {
  variant: "stock" | "etf" | "currency" | "cryptocurrency";
}

const StockMarker: React.FC<IStockMarkerProps> = ({ variant }) => {
  switch (variant) {
    case "stock":
      return (
        <div>
          <InputMolecule />
          <TabsBar variant={"stock"} />
        </div>
      );
    case "etf":
      return (
        <div>
          <InputMolecule />
          <TabsBar variant={"etf"} />
        </div>
      );

    case "currency":
      return (
        <div>
          <InputMolecule />
          <TabsBar variant={"currency"} />
        </div>
      );
    case "cryptocurrency":
      return (
        <div>
          <InputMolecule />
          <TabsBar variant={"cryptocurrency"} />
        </div>
      );
  }
};
export default StockMarker;

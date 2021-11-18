import React from "react";
import Tabs from "../../molecules/tabs";
import { TabsBarStyle } from "./style";

interface ITabsBarProps {
  variant: "stock" | "etf" | "currency" | "cryptocurrency";
}

const TabsBar: React.FC<ITabsBarProps> = ({ variant }) => {
  switch (variant) {
    case "stock":
      return (
        <TabsBarStyle>
          <Tabs>Company Financial Ratios</Tabs>
          <Tabs>Stock News</Tabs>
          <Tabs>SEC Filings!</Tabs>
          <Tabs>Key Executives</Tabs>
          <Tabs>Company Profile</Tabs>
          <Tabs>Company Financial Statements</Tabs>
          <Tabs>Stock Companies Price</Tabs>
        </TabsBarStyle>
      );
    case "etf":
      return (
        <TabsBarStyle>
          <Tabs>List ETF</Tabs>
          <Tabs>Historical Prices</Tabs>
          <Tabs>Sector Weightings</Tabs>
          <Tabs>Country Weightions</Tabs>
        </TabsBarStyle>
      );

    case "currency":
      return (
        <TabsBarStyle>
          <Tabs>Current Value </Tabs>
          <Tabs>Historical Data</Tabs>
        </TabsBarStyle>
      );
    case "cryptocurrency":
      return <div></div>;
  }
};
export default TabsBar;

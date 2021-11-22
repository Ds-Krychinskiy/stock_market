import React from "react";
import Tabs from "../../../atoms/tabs";
import { TabsBarStyle } from "./../style";

const StockMarket = () => {
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
};

export default StockMarket;

import React from "react";
import Tabs from "../../../atoms/tabs";
import { TabsBarStyle } from "./../style";

const Etf = () => {
  return (
    <TabsBarStyle>
      <Tabs>List ETF</Tabs>
      <Tabs>Historical Prices</Tabs>
      <Tabs>Sector Weightings</Tabs>
      <Tabs>Country Weightions</Tabs>
    </TabsBarStyle>
  );
};
export default Etf;

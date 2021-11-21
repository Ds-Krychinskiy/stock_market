import React from "react";
import Tabs from "../../../atoms/tabs";
import { TabsBarStyle } from "./../style";

const Currency = () => {
  return (
    <TabsBarStyle>
      <Tabs>Current Value </Tabs>
      <Tabs>Historical Data</Tabs>
    </TabsBarStyle>
  );
};

export default Currency;

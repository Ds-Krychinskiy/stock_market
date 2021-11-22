import React from "react";
import Typography from "../typography";
import { TabsStyle } from "./style";

interface ITabsProps {
  children: string;
}

const Tabs: React.FC<ITabsProps> = ({ children }) => {
  return (
    <TabsStyle>
      <Typography>{children}</Typography>
    </TabsStyle>
  );
};
export default Tabs;

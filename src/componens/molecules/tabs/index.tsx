import React from "react";
import Typography from "../../atoms/typography";
import { TabsStyle } from "./style";

interface ITabsProps {
  children: string;
}

const Tabs: React.FC<ITabsProps> = ({ children }) => {
  return (
    <TabsStyle>
      <Typography variant="tab">{children}</Typography>
    </TabsStyle>
  );
};
export default Tabs;

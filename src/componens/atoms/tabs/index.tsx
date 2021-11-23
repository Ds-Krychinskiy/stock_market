import React from "react";
import Tab from "@mui/material/Tab";

interface ITabsProps {
  label: string;
  value: string;
  onClick?: () => void;
}

const TabsComponent: React.FC<ITabsProps> = ({ label, value, onClick }) => {
  return <Tab value={value} onClick={onClick} label={label} />;
};
export default TabsComponent;

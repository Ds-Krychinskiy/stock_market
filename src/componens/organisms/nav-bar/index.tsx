import React from "react";
import Links from "../../atoms/link/link";
import { LinkBarStyle } from "./style";

const LinkBar = () => {
  return (
    <LinkBarStyle>
      <Links way="/stock_screener">Stock Screener</Links>
      <Links way="/stock_marker">Stock market</Links>
      <Links way="/etf">ETF</Links>
      <Links way="/currency">Currency</Links>
      <Links way="/cryptocurrency">Cryptocurrency</Links>
    </LinkBarStyle>
  );
};
export default LinkBar;

import React from "react";
import Links from "../../atoms/link/link";
import { LinkBarStyle } from "./style";

import * as routes from "./../../../routes";

const LinkBar = () => {
  return (
    <LinkBarStyle>
      <Links way={`/${routes.StockScreener}/`}>Stock Screener</Links>
      <Links way={`/${routes.StockMarket}/`}>Stock market</Links>
      <Links way={`/${routes.Etf}/`}>ETF</Links>
      <Links way={`/${routes.Currency}/`}>Currency</Links>
      <Links way={`/${routes.Cryptocurrency}/`}>Cryptocurrency</Links>
    </LinkBarStyle>
  );
};
export default LinkBar;

import { lazy } from "react";
import CurrencyPage from "./component/pages/currency";
import {
  StockScreenerRoute,
  PortfolioRoute,
  CompanyRoute,
  Currency,
} from "./consts";
const CompanyPage = lazy(() => import("./component/pages/companyPage"));
const Portfolio = lazy(() => import("./component/pages/portfolio"));
const StockScreener = lazy(() => import("./component/pages/stock_screener"));

export const MapPages = [
  {
    Component: StockScreener,
    RouteComponent: StockScreenerRoute,
  },
  {
    Component: Portfolio,
    RouteComponent: PortfolioRoute,
  },
  {
    Component: CurrencyPage,
    RouteComponent: Currency,
  },
  {
    Component: CompanyPage,
    RouteComponent: StockScreenerRoute + CompanyRoute + "/:name",
  },
];

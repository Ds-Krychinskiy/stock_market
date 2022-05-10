import { lazy } from "react";
import { StockScreenerRoute, PortfolioRoute, CompanyRoute } from "./consts";
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
    Component: CompanyPage,
    RouteComponent: CompanyRoute + "/:name",
  },
];

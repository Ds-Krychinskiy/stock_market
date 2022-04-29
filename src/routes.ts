import CompanyPage from "./component/pages/companyPage";
import Portfolio from "./component/pages/portfolio";
import StockScreener from "./component/pages/stock_screener";
import { StockScreenerRoute, PortfolioRoute, CompanyRoute } from "./consts";

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
    RouteComponent: StockScreenerRoute + CompanyRoute + "/:name",
  },
];

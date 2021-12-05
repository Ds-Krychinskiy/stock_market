import React from "react";
import LinkBar from "./componens/organisms/nav-bar";
import Templates from "./componens/templates";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as routes from "./routes";
import StockScreener from "./componens/templates/stock_screener";

const App = () => {
  return (
    <div>
      <Router>
        <LinkBar />
        <Switch>
          <Route path={`/${routes.StockScreener}`}>
            <StockScreener />
          </Route>
          <Route path={`/${routes.StockMarket}`}>
            <Templates variant={"stock"} />
          </Route>
          <Route path={`/${routes.Etf}`}>
            <Templates variant={"etf"} />
          </Route>
          <Route path={`/${routes.Currency}`}>
            <Templates variant={"currency"} />
          </Route>
          <Route path={`/${routes.Cryptocurrency}`}>
            <Templates variant={"cryptocurrency"} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

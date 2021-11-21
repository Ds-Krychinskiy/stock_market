import React from "react";
import LinkBar from "./componens/organisms/nav-bar";
import StockMarket from "./componens/templates/stock_market";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <LinkBar />
        <Switch>
          <Route path="/stock_marker">
            <StockMarket variant={"stock"} />
          </Route>
          <Route path="/etf">
            <StockMarket variant={"etf"} />
          </Route>
          <Route path="/currency">
            <StockMarket variant={"currency"} />
          </Route>
          <Route path="/cryptocurrency">
            <StockMarket variant={"cryptocurrency"} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

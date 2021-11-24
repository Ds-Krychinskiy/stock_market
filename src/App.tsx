import React from "react";
import LinkBar from "./componens/organisms/nav-bar";
import Templates from "./componens/templates";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as routes from "./routes";

const App = () => {
  return (
    <div>
      <Router>
        <LinkBar />
        <Switch>
          <Route path={`/${routes.StockMarket}`}>
            <Templates variant={"stock"} />
          </Route>
          <Route path="/etf">
            <Templates variant={"etf"} />
          </Route>
          <Route path="/currency">
            <Templates variant={"currency"} />
          </Route>
          <Route path="/cryptocurrency">
            <Templates variant={"cryptocurrency"} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

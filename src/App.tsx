import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./componens/Header";
import Home from "./componens/Home/Home";
import TSStocks from "./componens/Stocks/TSStocks";
import TSEtf from "./componens/Etf/TSEtf";
import TSIndices from "./componens/Indices/TSIndices";
import TSCurrency from "./componens/Currency/TSCurrency";
import TSCryptocurrency from "./componens/Cryptocurrency/TSCryptocurrency";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/stock_market">
            <TSStocks />
          </Route>
          <Route path="/etf">
            <TSEtf />
          </Route>
          <Route path="/indices">
            <TSIndices />
          </Route>
          <Route path="/currency">
            <TSCurrency />
          </Route>
          <Route path="/cryptocurrency">
            <TSCryptocurrency />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

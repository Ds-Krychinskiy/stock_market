import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./componens/Header";
import Home from "./componens/Home/Home";
import TSStocks from "./componens/Stocks/TSStocks";
import TSEtf from "./componens/Etf/TSEtf";
import TSIndices from "./componens/Indices/TSIndices";
import TSCurrency from "./componens/Currency/TSCurrency";
import TSCryptocurrency from "./componens/Cryptocurrency/TSCryptocurrency";
import StockScreener from "./componens/StockScreener/StockScreener";

const AppWrapper = styled.div`
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 50px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/stock_screener">
            <StockScreener />
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
    </AppWrapper>
  );
};

export default App;

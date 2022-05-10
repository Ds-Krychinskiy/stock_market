import { MapPages } from "./routes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./component/organism/header";
import Stock_Market_State from "./state/Stock_Market_State";
import { observer } from "mobx-react-lite";
import Stock_Screener_State from "./state/Stock_Screener_State";
import LazyComponent from "./hoc/lazyComponent";

const App = observer(() => {
  const { valueInput, setValueInput } = Stock_Market_State;
  const { getOneCompany } = Stock_Screener_State;

  return (
    <Router>
      <Header
        onClick={getOneCompany}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      <Routes>
        {MapPages.map(({ Component, RouteComponent }) => (
          <Route
            key={RouteComponent}
            path={`/${RouteComponent}`}
            element={<LazyComponent Component={<Component />} />}
          />
        ))}
      </Routes>
    </Router>
  );
});

export default App;

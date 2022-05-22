import { MapPages } from "./routes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";
import LazyComponent from "./hoc/lazyComponent";
import Header from "./component/organism/header";
import { StateProps } from "./state/Stock_Screener_State/interface";
import Stock_Screener_State from "./state/Stock_Screener_State";
import Stock_Market_State from "./state/Stock_Market_State";
import { useState } from "react";
import { useCallback } from "react";

const CreateState = {
  sector: "",
  services: "",
  industry: "",
  country: "",
  exchange: "",
  marketCap: 0,
  dividend: 0,
  tradingVolume: 0,
  beta: 0,
};

const App = observer(() => {
  const [listProps, setListProps] = useState<StateProps>(CreateState);
  const { getOneCompany } = Stock_Screener_State;
  const { valueInput, setValueInput } = Stock_Market_State;

  const getValueFromDropdownList = useCallback(
    (value: string | number, field: string) => {
      setListProps((_state) => ({ ..._state, [field]: value }));
    },
    []
  );
  return (
    <Router>
      <Header
        onClick={getOneCompany}
        valueInput={valueInput}
        setValueInput={setValueInput}
        listProps={listProps}
        getValueFromDropdownList={getValueFromDropdownList}
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

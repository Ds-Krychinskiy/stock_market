import React, { useState } from "react";
import InputMolecule from "../../molecules/input";
import TabsBar from "../../organisms/tabs-bar";
import { Route, Switch } from "react-router";
import * as routes from "../../../routes";
import PriceCryptoCurrency from "../../organisms/table/componens/CryptoCurrency";

const CryptoCurrency = () => {
  const [tiker, setTiker] = useState("");

  return (
    <div>
      <InputMolecule setTiker={setTiker} />
      <TabsBar variant={"cryptocurrency"} />
      <Switch>
        <Route path={`/${routes.Cryptocurrency}/${routes.PriceCryptoCurrency}`}>
          <PriceCryptoCurrency tiker={tiker} />
        </Route>
      </Switch>
    </div>
  );
};
export default CryptoCurrency;

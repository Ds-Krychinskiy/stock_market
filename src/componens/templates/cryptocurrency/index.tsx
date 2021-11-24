import React, { useState } from "react";
import InputMolecule from "../../molecules/input";
import TabsBar from "../../organisms/tabs-bar";

const CryptoCurrency = () => {
  const [tiker, setTiker] = useState("");
  return (
    <div>
      <InputMolecule setTiker={setTiker} />
      <TabsBar variant={"cryptocurrency"} />
    </div>
  );
};
export default CryptoCurrency;

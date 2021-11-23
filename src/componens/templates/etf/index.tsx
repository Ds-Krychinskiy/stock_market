import React, { useState } from "react";
import InputMolecule from "../../molecules/input";
import TabsBar from "../../organisms/tabs-bar";

const Etf = () => {
  const [tiker, setTiker] = useState("");
  return (
    <div>
      <InputMolecule  setTiker={setTiker}/>
      <TabsBar variant={"etf"} />
    </div>
  );
};

export default Etf;

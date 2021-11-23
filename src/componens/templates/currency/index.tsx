import React, { useState } from "react";
import InputMolecule from "../../molecules/input";
import TabsBar from "../../organisms/tabs-bar";

const Currency = () => {
  const [tiker, setTiker] = useState("");
  return (
    <div>
      <InputMolecule  setTiker={setTiker}/>
      <TabsBar variant={"currency"} />
    </div>
  );
};

export default Currency;

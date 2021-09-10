import InputCryptocurrency from "./InputCryptocurrency";
import { useState } from "react";

const TSCryptocurrency = () => {
  const [value, setValue] = useState("");

  return <InputCryptocurrency value={value} setValue={setValue} />;
};

export default TSCryptocurrency;

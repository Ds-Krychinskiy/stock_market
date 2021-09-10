import InputIndices from "./InputIndices";
import { useState } from "react";

const TSIndices = () => {
  const [value, setValue] = useState("");
  return <InputIndices value={value} setValue={setValue} />;
};

export default TSIndices;

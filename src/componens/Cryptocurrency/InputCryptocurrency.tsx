import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";

interface IInputCryptocurrencyProps {
  onAdd: (name: string) => void;
}

const InputCryptocurrency: React.FC<IInputCryptocurrencyProps> = ({
  onAdd,
}) => {
  const [tiker, setTiker] = useState("");

  const onClick = () => {
    onAdd(tiker);
    setTiker("");
  };

  return (
    <>
      <TextField
        className="input"
        label="Enter data"
        value={tiker}
        onChange={(e) => setTiker(e.target.value)}
      />
      <Button onClick={onClick}>
        <p>Save</p>
      </Button>
    </>
  );
};

export default InputCryptocurrency;

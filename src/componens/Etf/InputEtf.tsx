import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";

interface IInputEtfProps {
  setTiker: (name: string) => void;
  onAdd: () => void;
}

const InputEtf: React.FC<IInputEtfProps> = ({ setTiker, onAdd }) => {
  const [value, setValue] = useState("");
  const onClick = () => {
    onAdd();
    setValue("");
    setTiker(value);
  };

  return (
    <>
      <TextField
        className="input"
        label="Enter data"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={onClick}>
        <p>Save</p>
      </Button>
    </>
  );
};

export default InputEtf;

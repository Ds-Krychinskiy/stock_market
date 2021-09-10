import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";

interface IInputStockProps {
  onAdd: (name: string) => void;
}

const InputStock: React.FC<IInputStockProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    onAdd(value);
    setValue("");
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

export default InputStock;

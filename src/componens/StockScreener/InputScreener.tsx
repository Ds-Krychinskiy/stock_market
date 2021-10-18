import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";

interface IInputStockProps {
  onAdd: () => void;
}

const InputScreener: React.FC<IInputStockProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    onAdd();
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

export default InputScreener;

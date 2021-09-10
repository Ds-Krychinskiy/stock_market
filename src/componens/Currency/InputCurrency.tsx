import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

interface IInputCurrencyProps {
  setValue: (name: string) => void;
  value: string;
}

const InputCurrency: React.FC<IInputCurrencyProps> = ({ value, setValue }) => {
  return (
    <>
      <TextField
        className="input"
        label="Enter data"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>
        <p>Save</p>
      </Button>
    </>
  );
};

export default InputCurrency;

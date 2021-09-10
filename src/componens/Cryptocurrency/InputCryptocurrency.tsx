import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

interface IInputCryptocurrencyProps {
  setValue: (name: string) => void;
  value: string;
}

const InputCryptocurrency: React.FC<IInputCryptocurrencyProps> = ({
  value,
  setValue,
}) => {
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

export default InputCryptocurrency;

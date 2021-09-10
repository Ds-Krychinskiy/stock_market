import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

interface IInputEtfProps {
  onClick: () => void;
  setValue: (name: string) => void;
  value: string;
}

const InputEtf: React.FC<IInputEtfProps> = ({ value, setValue, onClick }) => {
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

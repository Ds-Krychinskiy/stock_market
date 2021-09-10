import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

interface IInputIndicesProps {
  setValue: (name: string) => void;
  value: string;
}

const InputIndices: React.FC<IInputIndicesProps> = ({ value, setValue }) => {
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

export default InputIndices;

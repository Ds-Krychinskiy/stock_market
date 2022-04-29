import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "../../atoms/typograhy";

interface AccordionProps {
  name: string;
  state: () => JSX.Element;
  onClick: () => void;
}

const AccordionComponent: React.FC<AccordionProps> = ({
  name,
  state,
  onClick,
}) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => onClick()}
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>{state()}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;

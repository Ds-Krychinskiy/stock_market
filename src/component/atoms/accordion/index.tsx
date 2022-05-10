import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "../typograhy";
import { ReactNode } from "react";

interface AccordionProps {
  name: string;
  state: ReactNode;
  onClick: () => void;
}

const AccordionCompanent: React.FC<AccordionProps> = 
  ({ name, state, onClick }) => {
    return (
      <Accordion
        style={{
          width: "40em",
          backgroundColor: "#120f0f",
          border: "1px solid #2451b7",
          borderRadius: "1em",
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => onClick()}
        >
          <Typography variant={"h3"}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>{state}</AccordionDetails>
      </Accordion>
    );
  }
;

export default AccordionCompanent;

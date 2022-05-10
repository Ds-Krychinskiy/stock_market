import { ReactNode } from "react";
import AccordionCompanent from "../../atoms/accordion";

interface AccordionProps {
  name: string;
  state: ReactNode;
  onClick: () => void;
}

const AccordionOrganism: React.FC<AccordionProps> = ({
  name,
  state,
  onClick,
}) => {
  return <AccordionCompanent name={name} state={state} onClick={onClick} />;
};

export default AccordionOrganism;

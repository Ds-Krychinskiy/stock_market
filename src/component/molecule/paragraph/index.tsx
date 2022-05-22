import { ReactNode } from "react";
import { ParagraphStyle, Wrapp } from "./style";

interface ParagraphProps {
  state: () => ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = ({ state }) => {
  return (
    <Wrapp>
      <ParagraphStyle>{state()}</ParagraphStyle>
    </Wrapp>
  );
};

export default Paragraph;

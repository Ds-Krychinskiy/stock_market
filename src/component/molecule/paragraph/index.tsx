import { ParagraphStyle,  } from "./style";

interface ParagraphProps {
  state: JSX.Element;
}
const Paragraph: React.FC<ParagraphProps> = ({ state }) => {
  return (
      <ParagraphStyle>{state}</ParagraphStyle>
  );
};

export default Paragraph;

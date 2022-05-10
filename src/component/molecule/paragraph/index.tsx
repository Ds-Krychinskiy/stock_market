import { ReactNode } from "react";
import Typography from "../../atoms/typograhy";

interface ParagraphProps {
  children: JSX.Element | ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <Typography variant={""}> {children}</Typography>;
};

export default Paragraph;

import Typography from "../../atoms/typograhy";

interface ParagraphProps {
  children: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <Typography>{children}</Typography>;
};

export default Paragraph;

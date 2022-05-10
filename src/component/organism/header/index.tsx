import { HeaderStyle } from "./style";
import SeatchBar from "../search_bar";
import LinksBar from "../links_bar";
interface HeaderProps {
  valueInput: string;
  onClick: (value: string) => void;
  setValueInput: (name: string) => void;
}
const Header: React.FC<HeaderProps> = ({
  valueInput,
  setValueInput,
  onClick,
}) => {
  return (
    <HeaderStyle>
      <LinksBar />
      <SeatchBar
        valueInput={valueInput}
        setValueInput={setValueInput}
        onClick={onClick}
      />
    </HeaderStyle>
  );
};
export default Header;

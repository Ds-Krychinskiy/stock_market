import { HeaderStyle, Wrapp } from "./style";
import SeatchBar from "../search_bar";
import LinksBar from "../links_bar";
import BasicModal from "../modal";
import { StateProps } from "../../../state/Stock_Screener_State/interface";
interface HeaderProps {
  valueInput: string;
  onClick: (value: string) => void;
  setValueInput: (name: string) => void;
  listProps: StateProps;
  getValueFromDropdownList: (value: string | number, field: string) => void;
}
const Header: React.FC<HeaderProps> = ({
  valueInput,
  setValueInput,
  onClick,
  listProps,
  getValueFromDropdownList, 
}) => {
  return (
    <HeaderStyle>
      <LinksBar />
      <Wrapp>
        <SeatchBar
          valueInput={valueInput}
          setValueInput={setValueInput}
          onClick={onClick}
        />
        <BasicModal
          state={listProps}
          getValueFromDropdownList={getValueFromDropdownList}
        />
      </Wrapp>
    </HeaderStyle>
  );
};
export default Header;

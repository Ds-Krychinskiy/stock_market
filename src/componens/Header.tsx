import { Link } from "react-router-dom";
import styled from "styled-components";

import * as routes from "../routes";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/home">Home</Link>
      <Link to="/stock_screener/">Stock Screener</Link>
      <Link to="/stock_market/">Stock market</Link>
      <Link to="/etf/">ETF</Link>
      <Link to="/indices">Indices</Link>
      <Link to="/currency/">Currency</Link>
      <Link to="/cryptocurrency">Cryptocurrency</Link>
    </HeaderStyle>
  );
};

export default Header;

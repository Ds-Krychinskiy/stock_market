import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/home">Home</Link>
      <Link to="/stock_market/">Stock market</Link>
      <Link to="/etf">ETF</Link>
      <Link to="/indices">Indices</Link>
      <Link to="/currency/">Currency</Link>
      <Link to="/cryptocurrency">Cryptocurrency</Link>
    </header>
  );
};

export default Header;

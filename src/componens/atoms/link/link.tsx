import React from "react";
import { Link } from "react-router-dom";
import Typography from "../typography";
interface ILinkProps {
  children: string;
  way: string;
}

const Links: React.FC<ILinkProps> = ({ children, way }) => {
  return (
    <div>
      <Link to={way}>
        <Typography>{children}</Typography>
      </Link>
    </div>
  );
};
export default Links;

import React from "react";
import { Link } from "react-router-dom";
import Typography from "../../atoms/typography";
interface ILinkProps {
  children: string;
  way: string;
}

const Links: React.FC<ILinkProps> = ({ children, way }) => {
  return (
    <div>
      <Link to={way}>
        <Typography variant={"link"}>{children}</Typography>
      </Link>
    </div>
  );
};
export default Links;

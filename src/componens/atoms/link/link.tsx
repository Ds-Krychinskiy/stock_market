import React from "react";
import { Link } from "react-router-dom";
import Typography from "../typography";
import { LinkStyle } from "./style";
interface ILinkProps {
  children: string;
  way: string;
}

const Links: React.FC<ILinkProps> = ({ children, way }) => {
  return (
    <LinkStyle>
      <Link to={way}>
        <Typography>{children}</Typography>
      </Link>
    </LinkStyle>
  );
};
export default Links;

import React from "react";
import { LinkBarStyle } from "./style";
import { Link } from "react-router-dom";
import { ListRoute } from "../../../consts";
const LinksBar = () => {
  return (
    <LinkBarStyle>
      {ListRoute.map((e) => (
        <Link key={e.way} to={`/${e.way}`}>
          {e.label}
        </Link>
      ))}
    </LinkBarStyle>
  );
};

export default LinksBar;

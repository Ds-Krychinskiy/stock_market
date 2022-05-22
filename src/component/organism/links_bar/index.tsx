import React from "react";
import { LinkBarStyle } from "./style";
import { ListRoute } from "../../../consts";
import Link from "../../molecule/link";
const LinksBar = () => {
  return (
    <LinkBarStyle>
      {ListRoute.map((e) => (
        <Link key={e.way} way={`/${e.way}`}>
          {e.label}
        </Link>
      ))}
    </LinkBarStyle>
  );
};

export default LinksBar;

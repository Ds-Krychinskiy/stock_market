import React from "react";
import { ButtonStyle } from "./style";

interface IButtonProps {
  onClick: () => void;
  children: JSX.Element;
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  return <ButtonStyle onClick={() => onClick()}>{children}</ButtonStyle>;
};

export default Button;

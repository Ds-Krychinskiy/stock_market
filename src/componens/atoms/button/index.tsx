import React from "react";
import { ButtonStyle } from "./style";

interface IButtonProps {
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({onClick}) => {
  
  return <ButtonStyle onClick={() => onClick()}>Save</ButtonStyle>;
};

export default Button;

// import { StyleButton } from "./Button.style";
import { ButtonHTMLAttributes } from "react";
import { StyleButton } from "./Button.style";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: number;
}

export const Button = ({ ...rest }: IProps) => {
  return <StyleButton {...rest} />;
};

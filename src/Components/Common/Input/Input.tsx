import { InputHTMLAttributes } from "react";
import { StyleInput } from "./Input.style";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: IProps) => {
  return <StyleInput {...rest} />;
};

import { InputHTMLAttributes, forwardRef } from "react";
import { StyleInput } from "./Input.style";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ ...rest }, ref) => {
    return <StyleInput ref={ref} {...rest} />;
  }
);

import Loader from "components/Loader";
import { ButtonHTMLAttributes, FC } from "react";
import ButtonStyles, { ButtonStylesProps } from "./styles";

interface ButtonProps
  extends ButtonStylesProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  return (
    <ButtonStyles
      variant={variant}
      disabled={props.disabled || props.isLoading}
      {...props}
    >
      {props.isLoading ? <Loader /> : props.children}
    </ButtonStyles>
  );
};

export default Button;

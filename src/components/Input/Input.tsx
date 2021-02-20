import Text from "components/Text";
import { FC, InputHTMLAttributes } from "react";
import InputStyles from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input: FC<Props> = ({ label, errorMessage, ...props }) => {
  const isError = Boolean(errorMessage?.trim());
  return (
    <InputStyles.Container>
      {label && <Text as="label">{label}</Text>}
      <InputStyles.Input {...props} isError={isError} />
      {isError && <Text color="error"> {errorMessage} </Text>}
    </InputStyles.Container>
  );
};

export default Input;

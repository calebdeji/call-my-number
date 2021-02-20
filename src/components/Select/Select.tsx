import Text from "components/Text";
import { FC, InputHTMLAttributes } from "react";
import SelectStyles from "./styles";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  options: Array<{ label: string; value: string | number }>;
}

const Select: FC<Props> = ({ label, errorMessage, options, ...props }) => {
  const isError = Boolean(errorMessage?.trim());

  return (
    <SelectStyles.Container>
      {label && (
        <Text color={`${isError ? "error" : "label"}`} as="label">
          {label}
        </Text>
      )}
      <SelectStyles.Select {...props}>
        {options.map(({ label, value }) => {
          return (
            <option value={value} key={`${label}_${value}`}>
              {" "}
              {label}{" "}
            </option>
          );
        })}
      </SelectStyles.Select>
    </SelectStyles.Container>
  );
};

export default Select;

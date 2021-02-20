import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from "constants/color";
import convertPixelToRem from "utils/convertPixelToRem";

const Container = styled.section`
  display: grid;
  row-gap: ${convertPixelToRem(10)};
  height: max-content;
`;

export interface InputStylesProps {
  isError?: boolean;
}

const Input = styled.input<InputStylesProps>`
  max-width: ${convertPixelToRem(500)};
  width: 100%;
  height: ${convertPixelToRem(40)};
  padding: ${convertPixelToRem(5)} ${convertPixelToRem(10)};
  border: solid ${convertPixelToRem(2)};
  border-radius: ${convertPixelToRem(10)};

  ${(props) => css`
    border-color: ${props.isError ? Colors.error : Colors.primaryColor};
    outline-color: ${props.isError ? Colors.error : Colors.primaryColor};
  `}
`;

const InputStyles = {
  Container,
  Input,
};

export default InputStyles;

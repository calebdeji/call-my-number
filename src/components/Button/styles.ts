import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from "constants/color";
import convertPixelToRem from "../../utils/convertPixelToRem";

export interface ButtonStylesProps {
  variant?: "primary" | "secondary";
  align?: "center" | "left" | "right";
  isLoading?: boolean;
}

const ButtonStyles = styled.button<ButtonStylesProps>`
  max-width: ${convertPixelToRem(200)};
  max-height: ${convertPixelToRem(40)};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${(props) => {
    switch (props.align) {
      case "center":
        return css`
          margin: auto;
        `;

      case "left":
        return css`
          margin-left: auto;
        `;

      case "right":
        return css`
          margin-right: auto;
        `;

      default:
        return css``;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: ${Colors.primaryColor};
          border-radius: ${convertPixelToRem(10)};
          padding: ${convertPixelToRem(10)} ${convertPixelToRem(20)};
          color: #ffffff;
          &:disabled {
            background-color: ${Colors.fadePrimaryColor};
          }
        `;

      default:
        return css``;
    }
  }}
`;

export default ButtonStyles;

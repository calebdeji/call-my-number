import { ElementType, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import convertPixelToRem from "utils/convertPixelToRem";
import COLORS from "constants/color";

export interface TextProps extends HTMLAttributes<any> {
  lineHeight?: number;
  as?: ElementType;
  weight?: number;
  size?: number;
  color?: string;
  align?: "center" | "left" | "right";
}

export const TextStyle = styled.span<TextProps>`
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
  ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `};
  ${(props) =>
    props.size &&
    css`
      font-size: ${convertPixelToRem(props.size)};
    `};
  ${(props) =>
    props.color &&
    css`
      color: ${COLORS[props.color] || props.color};
    `};
  ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${convertPixelToRem(props.lineHeight)};
    `}
`;

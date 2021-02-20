import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import COLORS from "constants/color";
import convertPixelToRem from "utils/convertPixelToRem";

export interface Props {
  size?: number;
  color?: string;
  holdAnimation?: boolean;
}

const spin = keyframes`
    from{
        transform : rotate(0deg)
    }
    to{
        transform : rotate(360deg)
    }
`;

const LoaderLine = styled.div<Props>`
  border: solid 2px;
  ${(props) =>
    props.color
      ? css`
          border-color: ${COLORS[props.color] ||
          props.color ||
          COLORS.primaryColor};
        `
      : css`
          border-color: ${COLORS.defaultWhite};
        `};
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: ${spin} 500ms infinite linear;
  width: ${(props) => convertPixelToRem(props?.size || 16)};
  height: ${(props) => convertPixelToRem(props?.size || 16)};
  border-radius: 100%;
  margin: auto;
  ${(props) =>
    props.holdAnimation &&
    css`
      animation-play-state: paused;
    `}
`;

export { LoaderLine };

import styled, { css } from "styled-components";
import type { Props } from "./types";

import { nostyle } from "../nostyle";

export const Shadow = styled.div`
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

const primary = css`
  background: #3f51b5;
  color: #fff;

  :hover,
  :active {
  }
  ${Shadow} {
  }
`;

const secondary = css`
  background: #3f51b5;
  color: inherit;
`;

const small = css``;

const medium = css``;

const large = css`
  padding: 8px 22px;
  font-size: 0.9375rem;
`;

export const Styled = styled.button<Props>`
  ${nostyle}

  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :hover,
  :active {
    text-decoration: none;
  }

  ${({ color }) => color === "secondary" && secondary};
  ${({ color }) => color === "primary" && primary};

  ${({ size }) => size === "small" && small};
  ${({ size }) => size === "medium" && medium};
  ${({ size }) => size === "large" && large};

  ${({ fullWidth }) => fullWidth && "width: 100%;"};
`;

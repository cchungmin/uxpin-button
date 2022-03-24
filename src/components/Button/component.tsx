import { Styled } from "./styled";
import type { Props } from "./types";

export const Component = ({
  children,
  color = "primary",
  disabled,
  fullWidth,
  mini = true,
  variant = "contained",
  size = "large",
}: Props) => {
  return (
    <Styled
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      mini={mini}
      variant={variant}
      size={size}
    >
      {children}
    </Styled>
  );
};

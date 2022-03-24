type Color = "primary" | "secondary";

const VARIANTS = ["text", "outlained", "contained"];

export type Variant = typeof VARIANTS[number];

type Size = "small" | "medium" | "large";

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, "size"> & {
  color?: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  mini?: boolean;
  variant?: Variant;
  size?: Size;
};

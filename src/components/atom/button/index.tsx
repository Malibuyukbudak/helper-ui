import { Button as MuiButton, ButtonProps } from "@mui/material";

export function Button({
  variant = "contained",
  onClick,
  color,
  children,
  type,
  sx,
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
      sx={{ borderRadius: "10px", p: 1, ...sx }}
    >
      {children}
    </MuiButton>
  );
}

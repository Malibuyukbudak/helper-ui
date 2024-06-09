import { Button as MuiButton, ButtonProps } from "@mui/material";

export function Button({
  variant = "contained",
  onClick,
  color,
  children,
  sx,
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{ borderRadius: "20px", p: 1, ...sx }}
    >
      {children}
    </MuiButton>
  );
}

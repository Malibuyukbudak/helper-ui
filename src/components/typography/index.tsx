import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type CustomTypographyProps = TypographyProps & {
  bold?: boolean;
};
export function Typography({
  bold,
  fontSize,
  variant,
  color,
  children,
  sx,
}: CustomTypographyProps) {
  return (
    <MuiTypography
      fontSize={fontSize}
      variant={variant}
      color={color}
      sx={{ fontWeight: bold ? "bold" : "normal", ...sx }}
    >
      {children}
    </MuiTypography>
  );
}

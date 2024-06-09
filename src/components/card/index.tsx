import { CardProps, Card as MuiCard } from "@mui/material";

export function Card({ children, variant, sx }: CardProps) {
  return <MuiCard variant={variant} sx={sx}>{children}</MuiCard>;
}

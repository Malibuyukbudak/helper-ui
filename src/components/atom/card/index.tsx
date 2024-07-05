import {
  CardContent as MuiCardContent,
  CardContentProps,
  CardProps,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardMediaProps,
} from "@mui/material";

export function Card({ children, variant, sx }: CardProps) {
  return (
    <MuiCard variant={variant} sx={sx}>
      {children}
    </MuiCard>
  );
}

export function CardContent({ children }: CardContentProps) {
  return <MuiCardContent>{children}</MuiCardContent>;
}

export function CardMedia({
  component,
  height,
  image,
  alt,
  children,
}: any) {
  return (
    <MuiCardMedia component={component} height={height} image={image} alt={alt}>
      {children}
    </MuiCardMedia>
  );
}

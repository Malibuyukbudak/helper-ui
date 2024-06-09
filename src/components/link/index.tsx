import { Link as MuiLink, LinkProps } from "@mui/material";

export function Link({ href, color, children, sx }: LinkProps) {
  return (
    <MuiLink href={href} color={color} sx={sx}>
      {children}
    </MuiLink>
  );
}

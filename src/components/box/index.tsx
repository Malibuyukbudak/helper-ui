import { Box as MuiBox, BoxProps } from "@mui/material";

export function Box({ children, sx }: BoxProps) {
  return <MuiBox sx={sx}> {children} </MuiBox>;
}

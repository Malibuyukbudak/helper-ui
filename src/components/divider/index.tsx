import { DividerProps, Divider as MuiDivider } from "@mui/material";

export function Divider({ style, sx }: DividerProps) {
  return <MuiDivider style={style} sx={sx} />;
}

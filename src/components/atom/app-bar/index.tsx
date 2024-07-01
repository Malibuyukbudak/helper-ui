import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";

export function AppBar({ position = "fixed", children, sx }: AppBarProps) {
  return (
    <MuiAppBar position={position} sx={sx}>
      {children}
    </MuiAppBar>
  );
}

import { Drawer as MuiDrawer, DrawerProps } from "@mui/material";

export function Drawer({
  open,
  variant = "persistent",
  anchor = "left",
  children,
  sx,
}: DrawerProps) {
  return (
    <MuiDrawer open={open} variant={variant} anchor={anchor} sx={sx}>
      {children}
    </MuiDrawer>
  );
}

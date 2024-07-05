import { Toolbar as MuiToolbar, ToolbarProps } from "@mui/material";

export function Toolbar({ children }: ToolbarProps) {
  return <MuiToolbar>{children}</MuiToolbar>;
}

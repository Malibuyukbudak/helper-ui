import { Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { IconButton } from "@/components/atom/icon-button";

export function MenuToolbar({ open, handleDrawerOpen, router }: any) {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => router.push("/home")}
        sx={{ fontSize: "18px" }}
      >
        Home
      </IconButton>
    </Toolbar>
  );
}

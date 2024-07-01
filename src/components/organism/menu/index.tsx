"use client";

import { useTheme } from "@mui/material/styles";

import { useState } from "react";
import { Box } from "@/components/atom/box";
import { useRouter } from "next/navigation";
import { MenuToolbar } from "@/components/molecule/menu-toolbar";
import { MenuDrawer } from "@/components/molecule/menu-drawer";
import { AppBar } from "@/components/atom/app-bar";

const drawerWidth = 240;

export default function Menu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <MenuToolbar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          router={router}
        />
      </AppBar>
      <MenuDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        router={router}
        drawerWidth={drawerWidth}
        theme={theme}
      />
      <Box
        sx={{
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
          }}
        />
        {children}
      </Box>
    </Box>
  );
}

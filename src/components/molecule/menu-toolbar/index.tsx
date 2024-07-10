import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import { IconButton } from "@/components/atom/icon-button";
import { Typography } from "@/components/atom/typography";
import { Profile } from "../menu-profile";
import { Box } from "@/components/atom/box";
import { Toolbar } from "@/components/atom/toolbar";

export function MenuToolbar() {
  const [profileMenuAnchor, setProfileMenuAnchor] =
    useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit" sx={{ fontSize: "18px" }}>
        <Typography color="white" variant="body1">
          Blog
        </Typography>
      </IconButton>
      <IconButton
        color="inherit"
        onClick={handleProfileMenuOpen}
        sx={{ fontSize: "18px", ml: 2 }}
      >
        <Typography color="white" variant="body1">
          Ayarlar
        </Typography>
      </IconButton>
      <Profile
        profileMenuAnchor={profileMenuAnchor}
        handleProfileMenuClose={handleProfileMenuClose}
      />
    </Toolbar>
  );
}

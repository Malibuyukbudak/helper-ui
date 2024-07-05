import { Menu, MenuItem } from "@mui/material";

import { Avatar } from "@/components/atom/avatar";
import { Divider } from "@/components/atom/divider";
import { Grid } from "@/components/atom/grid";
import { Typography } from "@/components/atom/typography";


export function Profile({ profileMenuAnchor, handleProfileMenuClose }: any) {
  return (
    <Menu
      anchorEl={profileMenuAnchor}
      open={Boolean(profileMenuAnchor)}
      onClose={handleProfileMenuClose}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ p: 2 }}
      >
        <Avatar sx={{ width: 64, height: 64, mr: 1 }}>A</Avatar>
        <Typography variant="h6" gutterBottom>
          Ali Buyukbudak
        </Typography>
      </Grid>
      <Divider sx={{ mb: 1 }} />
      <MenuItem>Profil</MenuItem>
      <MenuItem>Favorilerim</MenuItem>
      <MenuItem>Son Baktıklarım</MenuItem>
      <MenuItem>Çıkış Yap</MenuItem>
    </Menu>
  );
}

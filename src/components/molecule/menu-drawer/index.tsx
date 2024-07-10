import TableChartIcon from "@mui/icons-material/TableChart";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EventIcon from "@mui/icons-material/Event";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import { Box } from "@/components/atom/box";
import { Divider } from "@/components/atom/divider";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@/components/atom/list";
import { Drawer } from "@/components/atom/drawer";

export function MenuDrawer({ theme, drawerWidth, router }: any) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#fffefe",
        },
      }}
      open={true}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: "flex-end",
        }}
      ></Box>
      <Divider />
      <List>
        <ListItem key="organization" disablePadding>
          <ListItemButton onClick={() => router.push("/event/organization")}>
            <ListItemIcon>
              <TableChartIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Organizasyon" />
          </ListItemButton>
        </ListItem>
        <ListItem key="photo" disablePadding>
          <ListItemButton onClick={() => router.push("/event/photo")}>
            <ListItemIcon>
              <PhotoCameraIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Fotoğraf" />
          </ListItemButton>
        </ListItem>
        <ListItem key="flower" disablePadding>
          <ListItemButton onClick={() => router.push("/event/flower")}>
            <ListItemIcon>
              <LocalFloristIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Çiçek" />
          </ListItemButton>
        </ListItem>
        <ListItem key="catering" disablePadding>
          <ListItemButton onClick={() => router.push("/event/catering")}>
            <ListItemIcon>
              <RestaurantIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Catering" />
          </ListItemButton>
        </ListItem>
        <ListItem key="henna" disablePadding>
          <ListItemButton onClick={() => router.push("/event/henna")}>
            <ListItemIcon>
              <EventIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Kına" />
          </ListItemButton>
        </ListItem>
        <ListItem key="engagement" disablePadding>
          <ListItemButton onClick={() => router.push("/event/engagement")}>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Nişan" />
          </ListItemButton>
        </ListItem>
        <ListItem key="wedding" disablePadding>
          <ListItemButton onClick={() => router.push("/event/wedding")}>
            <ListItemIcon>
              <FavoriteBorderIcon sx={{ color: "#bcbcbc" }} />
            </ListItemIcon>
            <ListItemText secondary="Düğün" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

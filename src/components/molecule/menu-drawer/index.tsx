import { Box } from "@/components/atom/box";
import { Divider } from "@/components/atom/divider";
import { IconButton } from "@/components/atom/icon-button";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@/components/atom/list";
import { Drawer, ListItemIcon } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TableChartIcon from "@mui/icons-material/TableChart";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export function MenuDrawer({
  open,
  theme,
  handleDrawerClose,
  drawerWidth,
  router,
}: any) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem key="data-table" disablePadding>
          <ListItemButton onClick={() => router.push("/home/data-table")}>
            <ListItemIcon>
              <TableChartIcon />
            </ListItemIcon>
            <ListItemText secondary="Data Table" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="form" disablePadding>
          <ListItemButton onClick={() => router.push("/home/form")}>
            <ListItemIcon>
              <FormatAlignJustifyIcon />
            </ListItemIcon>
            <ListItemText secondary="Form" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}

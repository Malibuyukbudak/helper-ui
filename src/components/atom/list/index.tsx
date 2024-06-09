import {
  ListItem as MuiListItem,
  List as MuiList,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListProps,
  ListItemProps,
  ListItemIconProps,
  ListItemTextProps,
} from "@mui/material";

export function List({ children, sx }: ListProps) {
  return <MuiList sx={sx}>{children}</MuiList>;
}

export function ListItem({ children, sx }: ListItemProps) {
  return <MuiListItem sx={sx}>{children}</MuiListItem>;
}

export function ListItemIcon({ children, sx }: ListItemIconProps) {
  return <MuiListItemIcon sx={sx}>{children}</MuiListItemIcon>;
}

export function ListItemText({ secondary, children, sx }: ListItemTextProps) {
  return (
    <MuiListItemText secondary={secondary} sx={sx}>
      {children}
    </MuiListItemText>
  );
}

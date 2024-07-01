import {
  ListItem as MuiListItem,
  List as MuiList,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListItemButton as MuiListItemButton,
  ListProps,
  ListItemProps,
  ListItemIconProps,
  ListItemTextProps,
  ListItemButtonProps,
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

export function ListItemText({
  primary,
  secondary,
  children,
  sx,
}: ListItemTextProps) {
  return (
    <MuiListItemText primary={primary} secondary={secondary} sx={sx}>
      {children}
    </MuiListItemText>
  );
}

export function ListItemButton({ children, sx }: ListItemButtonProps) {
  return <MuiListItemButton sx={sx}>{children}</MuiListItemButton>;
}

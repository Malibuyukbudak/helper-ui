import { AvatarProps, Avatar as MuiAvatar } from "@mui/material";

export function Avatar({ sx, children }: AvatarProps) {
  return <MuiAvatar sx={sx}>{children}</MuiAvatar>;
}

import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";

export function IconButton({
  children,
  color,
  type,
  onClick,
}: IconButtonProps) {
  return (
    <MuiIconButton type={type} onClick={onClick} color={color}>
      {children}
    </MuiIconButton>
  );
}

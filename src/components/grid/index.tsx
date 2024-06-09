import { GridProps, Grid as MuiGrid } from "@mui/material";

export function Grid({
  xs,
  md,
  container,
  children,
  display,
  justifyContent,
  alignItems,
  direction,
  width,
  item,
  spacing,
  sx,
}: GridProps) {
  return (
    <MuiGrid
      display={display}
      direction={direction}
      alignItems={alignItems}
      item={item}
      xs={xs}
      md={md}
      spacing={spacing}
      justifyContent={justifyContent}
      container={container}
      width={width}
      sx={sx}
    >
      {children}
    </MuiGrid>
  );
}

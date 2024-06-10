import MuiGrid, { GridProps } from "@mui/material/Grid";

export function GridItem({
  children,
  columns,
  sx,
  xs,
  md,
  lg,
  xl,
  wrap,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  zeroMinWidth,
  justifyContent = "space-between",
  alignItems = "center",
  alignSelf,
}: GridProps) {
  return (
    <MuiGrid
      columns={columns}
      item
      sx={sx}
      xs={xs}
      md={md}
      lg={lg}
      xl={xl}
      wrap={wrap}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      zeroMinWidth={zeroMinWidth}
      justifyContent={justifyContent}
      alignSelf={alignSelf}
      alignItems={alignItems}
    >
      {children}
    </MuiGrid>
  );
}

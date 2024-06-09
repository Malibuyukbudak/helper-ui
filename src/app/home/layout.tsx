import { Grid } from "@/atom/grid";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ minHeight: "100vh", p: 2 }}
    >
      {children}
    </Grid>
  );
}

import { Grid } from "@/components/atom/grid";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      direction="column"
      alignItems="center"
      sx={{ minHeight: "100vh", p: 2 }}
    >
      {children}
    </Grid>
  );
}

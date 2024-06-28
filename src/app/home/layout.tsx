import { Grid } from "@/components/atom/grid";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      sx={{
        p: 2,
      }}
    >
      {children}
    </Grid>
  );
}

import { Grid } from "@/components/atom/grid";
import Menu from "@/components/organism/menu";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        my: 20,
      }}
    >
      <Grid.Item xs={12} md={3}>
        {children}
      </Grid.Item>
    </Grid>
  );
}

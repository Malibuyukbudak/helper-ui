import { Grid } from "@/components/atom/grid";
import { Auth } from "@/components/organism/auth";

export default function AuthPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        my: 20,
      }}
    >
      <Grid.Item xs={12} md={3}>
        <Auth searchParams={searchParams} />
      </Grid.Item>
    </Grid>
  );
}

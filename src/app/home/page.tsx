import { Tabs, Tab, TabPanel } from "@/components/atom/tabs";
import { Login } from "@/components/molecule/login";
import { Register } from "@/components/molecule/register";
import { Grid } from "@/components/atom/grid";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid.Item xs={12} md={3}>
        <Grid
          sx={{
            justifyContent: "center",
          }}
        >
          <Tabs
            name="section"
            searchParams={searchParams}
            value={Number(searchParams?.["section"])}
            sx={{ py: 2 }}
          >
            <Tab label="Giriş Yap" value={1} />
            <Tab label="Kayıt Ol" value={2} />
          </Tabs>

          <TabPanel value={Number(searchParams?.["section"])} index={1}>
            <Login />
          </TabPanel>
          <TabPanel value={Number(searchParams?.["section"])} index={2}>
            <Register />
          </TabPanel>
        </Grid>
      </Grid.Item>
    </Grid>
  );
}

import { Grid } from "@/components/atom/grid";
import { Tab, TabPanel, Tabs } from "@/components/atom/tabs";
import { Login } from "@/components/molecule/login";
import { Register } from "@/components/molecule/register";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  // TODO section problems, hizalama
  return (
    <Grid>
      <Grid.Item xs={12}>
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
      </Grid.Item>
    </Grid>
  );
}

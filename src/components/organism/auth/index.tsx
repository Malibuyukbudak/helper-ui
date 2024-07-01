"use client";

import { Grid } from "@/components/atom/grid";
import { Tab, TabPanel, Tabs } from "@/components/atom/tabs";
import { Login } from "@/components/molecule/auth-login";
import { Register } from "@/components/molecule/auth-register";
import useQueryParams from "@/hooks/query";

export function Auth({ searchParams }: any) {
  const { setQueryParams } = useQueryParams();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setQueryParams({
      ...{ section: newValue },
    });
  };
  return (
    <Grid
      sx={{
        justifyContent: "center",
      }}
    >
      <Tabs
        value={Number(searchParams?.["section"])}
        onChange={handleChange}
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
  );
}

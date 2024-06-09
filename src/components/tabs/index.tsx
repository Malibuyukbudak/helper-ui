"use client";

import {
  Tabs as MuiTabs,
  TabsProps,
  Box,
  Tab as MuiTab,
  TabProps,
} from "@mui/material";

import useQueryParams from "@/hooks/query";

type TabPanelProps = {
  children?: React.ReactNode;
  index?: number;
  value?: number;
  searchParams?: any;
};

type CustomTabsProps = TabsProps & {
  name: string;
  searchParams: Record<string, any>;
};

export function TabPanel({
  children,
  index,
  value,
  searchParams,
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...searchParams}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

export function Tabs({ name, searchParams, children, sx }: CustomTabsProps) {
  const { setQueryParams } = useQueryParams();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setQueryParams({
      ...{ section: newValue },
    });
  };
  return (
    <MuiTabs value={Number(searchParams[name])} onChange={handleChange} sx={sx}>
      {children}
    </MuiTabs>
  );
}

export function Tab(props: TabProps) {
  return <MuiTab {...props} />;
}

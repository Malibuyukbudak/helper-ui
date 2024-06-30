"use client";

import {
  Tabs as MuiTabs,
  TabsProps,
  Box,
  Tab as MuiTab,
  TabProps,
} from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  index?: number;
  value?: number;
  searchParams?: any;
};

export function TabPanel({ children, index, value }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

export function Tabs({ value, children, onChange, sx }: TabsProps) {
  return (
    <MuiTabs value={value} onChange={onChange} sx={sx}>
      {children}
    </MuiTabs>
  );
}

export function Tab(props: TabProps) {
  return <MuiTab {...props} />;
}

import Breadcrumbs from "@/components/atom/bread-crumb";
import { Grid } from "@/components/atom/grid";
import Menu from "@/components/organism/menu";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Menu>
        <Grid></Grid>
        <Breadcrumbs />
        {children}
      </Menu>
  );
}

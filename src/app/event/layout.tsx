import Breadcrumbs from "@/components/atom/bread-crumb";
import Menu from "@/components/organism/menu";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Menu>
      <Breadcrumbs />
      {children}
    </Menu>
  );
}

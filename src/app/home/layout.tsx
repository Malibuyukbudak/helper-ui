import Menu from "@/components/organism/menu";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Menu>{children}</Menu>;
}

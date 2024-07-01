import PersistentDrawerLeft from "@/components/molecule/menu";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PersistentDrawerLeft>{children}</PersistentDrawerLeft>;
}

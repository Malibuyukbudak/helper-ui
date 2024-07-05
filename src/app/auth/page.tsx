import { Auth } from "@/components/organism/auth";

export default function AuthPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <Auth searchParams={searchParams} />;
}

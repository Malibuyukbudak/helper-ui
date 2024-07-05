import { EventCardView } from "@/components/molecule/event-card";

export default function OrganizationPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <EventCardView searchParams={searchParams} />;
}

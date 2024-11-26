import { EventCardView } from "@/components/molecule/event-card";

const organizations = Array.from({ length: 28 }, (_, index) => ({
  name: `organizations ${index + 1}`,
  description: "Bu organizations açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function OrganizationPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={organizations} />
  );
}

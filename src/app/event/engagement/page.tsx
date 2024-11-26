import { EventCardView } from "@/components/molecule/event-card";

const engagement = Array.from({ length: 28 }, (_, index) => ({
  name: `engagement ${index + 1}`,
  description: "Bu engagement açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function EngagementPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={engagement} />
  );
}

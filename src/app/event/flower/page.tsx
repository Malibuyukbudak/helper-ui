import { EventCardView } from "@/components/molecule/event-card";

const flowers = Array.from({ length: 28 }, (_, index) => ({
  name: `flowers ${index + 1}`,
  description: "Bu flowers açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function FlowerPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <EventCardView searchParams={searchParams} data={flowers} />;
}

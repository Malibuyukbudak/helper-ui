import { EventCardView } from "@/components/molecule/event-card";

const photos = Array.from({ length: 28 }, (_, index) => ({
  name: `photos ${index + 1}`,
  description: "Bu photos açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function PhotoPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <EventCardView searchParams={searchParams} data={photos} />;
}

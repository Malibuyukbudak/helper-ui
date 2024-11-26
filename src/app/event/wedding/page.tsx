import { EventCardView } from "@/components/molecule/event-card";

const wedding = Array.from({ length: 28 }, (_, index) => ({
  name: `wedding ${index + 1}`,
  description: "Bu wedding açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function WeddingPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={wedding} />
  );
}

import { EventCardView } from "@/components/molecule/event-card";

const henna = Array.from({ length: 28 }, (_, index) => ({
  name: `henna ${index + 1}`,
  description: "Bu henna açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function HennaPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={henna} />
  );
}

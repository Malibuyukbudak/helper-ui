import { EventCardView } from "@/components/molecule/event-card";

const catering = Array.from({ length: 28 }, (_, index) => ({
  name: `catering ${index + 1}`,
  description: "Bu catering açıklaması.",
  price: `$${(index + 1) * 100}`,
  imageUrl: "https://via.placeholder.com/150",
}));

export default function CateringPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <EventCardView searchParams={searchParams} data={catering} />;
}

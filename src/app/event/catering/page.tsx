import { EventCardView } from "@/components/molecule/event-card";

const catering = [
  {
    name: "catering 1",
    description: "Bu catering açıklaması.",
    price: "$100",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 2",
    description: "Bu catering açıklaması.",
    price: "$200",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 3",
    description: "Bu catering açıklaması.",
    price: "$300",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 4",
    description: "Bu catering açıklaması.",
    price: "$400",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 5",
    description: "Bu catering açıklaması.",
    price: "$500",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 6",
    description: "Bu catering açıklaması.",
    price: "$600",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 7",
    description: "Bu catering açıklaması.",
    price: "$700",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 8",
    description: "Bu catering açıklaması.",
    price: "$800",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "catering 9",
    description: "Bu catering açıklaması.",
    price: "$900",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function CateringPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={catering} />
  );
}

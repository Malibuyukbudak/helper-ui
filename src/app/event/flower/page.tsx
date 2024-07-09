import { EventCardView } from "@/components/molecule/event-card";

const flowers = [
  {
    name: "flowers 1",
    description: "Bu flowers açıklaması.",
    price: "$100",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 2",
    description: "Bu flowers açıklaması.",
    price: "$200",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 3",
    description: "Bu flowers açıklaması.",
    price: "$300",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 4",
    description: "Bu flowers açıklaması.",
    price: "$400",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 5",
    description: "Bu flowers açıklaması.",
    price: "$500",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 6",
    description: "Bu flowers açıklaması.",
    price: "$600",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 7",
    description: "Bu flowers açıklaması.",
    price: "$700",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 8",
    description: "Bu flowers açıklaması.",
    price: "$800",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "flowers 9",
    description: "Bu flowers açıklaması.",
    price: "$900",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function FlowerPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={flowers} />
  );
}

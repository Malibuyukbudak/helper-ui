import { EventCardView } from "@/components/molecule/event-card";

const wedding = [
  {
    name: "wedding 1",
    description: "Bu wedding açıklaması.",
    price: "$100",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 2",
    description: "Bu wedding açıklaması.",
    price: "$200",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 3",
    description: "Bu wedding açıklaması.",
    price: "$300",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 4",
    description: "Bu wedding açıklaması.",
    price: "$400",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 5",
    description: "Bu wedding açıklaması.",
    price: "$500",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 6",
    description: "Bu wedding açıklaması.",
    price: "$600",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 7",
    description: "Bu wedding açıklaması.",
    price: "$700",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 8",
    description: "Bu wedding açıklaması.",
    price: "$800",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "wedding 9",
    description: "Bu wedding açıklaması.",
    price: "$900",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function WeddingPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={wedding} />
  );
}

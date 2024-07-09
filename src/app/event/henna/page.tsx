import { EventCardView } from "@/components/molecule/event-card";

const henna = [
  {
    name: "henna 1",
    description: "Bu henna açıklaması.",
    price: "$100",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 2",
    description: "Bu henna açıklaması.",
    price: "$200",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 3",
    description: "Bu henna açıklaması.",
    price: "$300",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 4",
    description: "Bu henna açıklaması.",
    price: "$400",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 5",
    description: "Bu henna açıklaması.",
    price: "$500",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 6",
    description: "Bu henna açıklaması.",
    price: "$600",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 7",
    description: "Bu henna açıklaması.",
    price: "$700",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 8",
    description: "Bu henna açıklaması.",
    price: "$800",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "henna 9",
    description: "Bu henna açıklaması.",
    price: "$900",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function HennaPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={henna} />
  );
}

import { EventCardView } from "@/components/molecule/event-card";

const photos = [
  {
    name: "Photo 1",
    description: "Bu Photo açıklaması.",
    price: "$100",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 2",
    description: "Bu Photo açıklaması.",
    price: "$200",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 3",
    description: "Bu Photo açıklaması.",
    price: "$300",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 4",
    description: "Bu Photo açıklaması.",
    price: "$400",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 5",
    description: "Bu Photo açıklaması.",
    price: "$500",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 6",
    description: "Bu Photo açıklaması.",
    price: "$600",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 7",
    description: "Bu Photo açıklaması.",
    price: "$700",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 8",
    description: "Bu Photo açıklaması.",
    price: "$800",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photo 9",
    description: "Bu Photo açıklaması.",
    price: "$900",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function PhotoPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <EventCardView searchParams={searchParams} data={photos} />;
}

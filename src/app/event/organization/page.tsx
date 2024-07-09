import { EventCardView } from "@/components/molecule/event-card";

const organizations = [
  {
    name: "Organizasyon 1",
    description: "Bu organizasyonun açıklaması.",
    price: "$100",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 2",
    description: "Bu organizasyonun açıklaması.",
    price: "$200",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 3",
    description: "Bu organizasyonun açıklaması.",
    price: "$300",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 4",
    description: "Bu organizasyonun açıklaması.",
    price: "$400",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 5",
    description: "Bu organizasyonun açıklaması.",
    price: "$500",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 6",
    description: "Bu organizasyonun açıklaması.",
    price: "$600",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 7",
    description: "Bu organizasyonun açıklaması.",
    price: "$700",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 8",
    description: "Bu organizasyonun açıklaması.",
    price: "$800",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Organizasyon 9",
    description: "Bu organizasyonun açıklaması.",
    price: "$900",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function OrganizationPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <EventCardView searchParams={searchParams} data={organizations} />
  );
}

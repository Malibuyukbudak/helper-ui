"use client";

import { Pagination } from "@mui/material";

import { Box } from "@/components/atom/box";
import { Card, CardContent, CardMedia } from "@/components/atom/card";
import { Grid } from "@/components/atom/grid";
import { Typography } from "@/components/atom/typography";
import useQueryParams from "@/hooks/query";

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

const ITEMS_PER_PAGE = 8;

export function EventCardView({ searchParams }: any) {
  const { setQueryParams } = useQueryParams();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setQueryParams({
      ...{ page: newValue },
    });
  };

  if (!searchParams?.page) {
    setQueryParams({ page: 1 });
    searchParams.page = 1;
  }

  const startIndex = (Number(searchParams?.["page"]) - 1) * ITEMS_PER_PAGE;
  const selectedOrganizations = organizations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {selectedOrganizations.map((org, index) => (
          <Grid.Item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={org.imageUrl}
                alt={org.name}
              />
              <CardContent>
                <Typography variant="h5">{org.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {org.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {org.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid.Item>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(organizations.length / ITEMS_PER_PAGE)}
          page={Number(searchParams.page)}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}

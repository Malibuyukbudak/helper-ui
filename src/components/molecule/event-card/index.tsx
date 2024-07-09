"use client";

import { Pagination } from "@mui/material";

import { Box } from "@/components/atom/box";
import { Card, CardContent, CardMedia } from "@/components/atom/card";
import { Grid } from "@/components/atom/grid";
import { Typography } from "@/components/atom/typography";
import useQueryParams from "@/hooks/query";

export function EventCardView({
  searchParams,
  data,
  itemsPerPage = 8,
}: any) {
  const { setQueryParams } = useQueryParams();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setQueryParams({
      ...{ page: newValue },
    });
  };

  const currentPage = searchParams?.page ? Number(searchParams.page) : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {selectedData.map((org, index) => (
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
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}

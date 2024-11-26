"use client";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "../link";
import { usePathname } from "next/navigation";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface CustomSeparatorProps {
  breadcrumbs?: Breadcrumb[];
  url?: string;
}

export default function Breadcrumbs({
  breadcrumbs,
  url,
}: CustomSeparatorProps) {
  const pathname = usePathname();

  const generateBreadcrumbsFromUrl = (url: string): Breadcrumb[] => {
    const segments = url.split("/").filter((segment) => segment);
    const result: Breadcrumb[] = segments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: "/" + segments.slice(0, index + 1).join("/"),
    }));

    return [{ label: "Home", href: "/" }, ...result];
  };

  const breadcrumbList =
    breadcrumbs || generateBreadcrumbsFromUrl(url || pathname);

  const renderedBreadcrumbs = breadcrumbList.map((item, index) =>
    item.href ? (
      <Link
        underline="hover"
        key={index}
        color="inherit"
        href={item.href}
        onClick={(e) => e.preventDefault()}
        sx={{ fontSize: "12px" }}
      >
        {item.label}
      </Link>
    ) : (
      <Typography key={index} sx={{ color: "text.primary" }}>
        {item.label}
      </Typography>
    )
  );

  return (
    <Stack spacing={2}>
      <MuiBreadcrumbs separator="›" aria-label="breadcrumb">
        {renderedBreadcrumbs}
      </MuiBreadcrumbs>
    </Stack>
  );
}

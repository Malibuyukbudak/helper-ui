"use client";

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Adjust weights as needed
  subsets: ["latin"], // Adjust subsets as needed
  display: "swap",
});

const palette = {
  primary: {
    main: "#FF6274",
  },
  secondary: {
    main: "#5F5F5F",
  },
  info: {
    main: "#000000",
  },
  inherit: {
    main: "#FFFFFF",
  },
};
const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          fontWeight: "bold",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "black",
        },
      },
    },
  },
});

export default theme;

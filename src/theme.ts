"use client";

import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#57A0FF",
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;

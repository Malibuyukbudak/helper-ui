import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Metadata } from "next";

import theme from "@/theme";

export const metadata: Metadata = {
  title: "Helper UI",
  description: "Helper UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children} </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

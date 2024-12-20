import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
// or `v1X-appRouter` if you are using Next.js v1X

import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/components/theme";

export const metadata = {
  title: "Event Manager",
  description: "Event Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={
          {
            // margin: 0,
            // minHeight: "100vh",
            // backgroundImage: 'url("/assets/images/background.jpg")',
            // backgroundRepeat: "repeat",
          }
        }
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import MyHeader from "./components/header/MyHeader";
import Footer from "./components/footer/Footer";
import theme from "./theme/theme";
import { CssBaseline, ThemeProvider } from '@mui/material';

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <MyHeader />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

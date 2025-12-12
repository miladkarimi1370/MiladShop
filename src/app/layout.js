
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./theme/ThemeRegistery";
import MyHeader from "./components/header/MyHeader";
import Footer from "./components/footer/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "فروشگاه اینترنتی میلاد",
  description: "بزرگترین مرجع تخصصی انواع لباس‌های اورجینال در ایران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <ThemeRegistry>
          <MyHeader />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

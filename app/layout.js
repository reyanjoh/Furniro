import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import MainFooter from "@/components/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furniro",
  description: "Furniro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}

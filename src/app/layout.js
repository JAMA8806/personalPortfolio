import { ThemeContextProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My personal Portfolio",
  description: "Portfolio made with next.js app",
};

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <body className={`${inter.className} `}>{children}</body>
      </html>
    </ThemeContextProvider>
  );
}

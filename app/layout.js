import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Safe",
  description: "Less hassle, more memories",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="sunset" lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hobby Hotspot",
  description: "Hobby Hotspot is an online navigation assistant that recommends spots within the City against the respective interests and hobbies of users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
      
        <div className="flex">
        <Sidebar/>
          <main className="flex-grow p-5">{children}</main>
        </div>
      
      </body>
    </html>
  );
}

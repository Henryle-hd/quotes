import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Asideleft from "@/components/aside-left";
import Asideright from "@/components/aside-right";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import SearchAuthor from "@/components/searchAuthor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quotes",
  description: "Stay motivated with quotes from famous people around the world."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex gap-2 justify-center")}>
        <div className="">
          <SearchAuthor />
        </div>
        <div className="">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

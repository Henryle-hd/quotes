import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Asideleft from "@/components/aside-left";
import Asideright from "@/components/aside-right";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

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
      <body className={cn(inter.className, "grid grid-cols-12")}>
        <div className="hidden  lg:col-start-3 lg:col-end-5 lg:block ">
          <Asideleft />
        </div>
        <div className="md:col-start-6 md:col-end-8 col-start-1 col-end-12">
          <NavBar />

          {children}
        </div>

        <div className=" hidden md:block md:col-start-9 md:col-end-12 ">
          <Asideright />
        </div>
      </body>
    </html>
  );
}

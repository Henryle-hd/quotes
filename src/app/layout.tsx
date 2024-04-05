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
        <div className="col-start-3 col-end-5">
          <Asideleft />
        </div>
        <div className="col-start-6 col-end-8 ">
          <NavBar />

          {children}
        </div>

        <div className="col-start-9 col-end-11">
          <Asideright />
        </div>
      </body>
    </html>
  );
}

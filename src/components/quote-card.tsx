import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import { ArrowDown, ArrowUp, Download, icons, Share } from "lucide-react";
import { Button } from "./ui/button";

export default function Quotecard() {
  return (
    <main className="flex justify-center items-center mt-3 flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Card className="w-96 h-96 border shadow">
          <CardContent className="flex flex-col gap-10 justify-center items-center h-full w-full">
            <p className="text-2xl font-bold px-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>

            <CardFooter className="flex gap-3 justify-center items-center">
              <Separator className="w-6" />
              <h2>Henry Dioniz</h2>
            </CardFooter>
          </CardContent>
        </Card>
        <Card className="w-96 h-11">
          <CardContent className="grid grid-cols-4 gap-14 justify-center items-center h-12 w-full pt-[0.2rem]">
            {/* flex gap-4 py-1 justify-between items-center{" "} */}
            <div className="flex items-center gap-1 hover:text-[#ff5400]">
              <Button
                className="rounded-xl p-2 text-[#ff5400]"
                variant={"outline"}
                size={"icon"}
              >
                <ArrowUp size={30} strokeWidth={3} />
              </Button>
              <span className="text-[#ff5400]">425k</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[#ff5400]">
              <Button
                className="rounded-xl p-2 hover:text-[#ff5400]"
                variant={"outline"}
                size={"icon"}
              >
                <ArrowDown size={30} strokeWidth={3} />
              </Button>
              <span className="">10</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[#ff5400]">
              <Button
                className="rounded-xl p-2 hover:text-[#ff5400]"
                size={"icon"}
                variant={"outline"}
              >
                <Share size={30} strokeWidth={3} />
              </Button>
              <span className="">425k</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                className="rounded-xl p-2 hover:text-[#ff5400]"
                size={"icon"}
                variant={"outline"}
              >
                <Download size={30} strokeWidth={3} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Separator />
      </div>
    </main>
  );
}

import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList
} from "./ui/command";
import Facebook from "@/app/assets/Facebook.png";
import Instgram from "@/app/assets/instergram.png";
import X from "@/app/assets/x-removebg-preview.png";

import Image from "next/image";

export default function Asideleft() {
  return (
    <Card className="sticky top-0 hidden md:flex max-h-[100vh] min-h-screen   flex-col justify-start gap-2 overflow-hidden rounded-l-none rounded-r-sm px-1 border-l-0 z-20 ">
      <CardContent>
        <Command className="rounded-xl border shadow-md mt-2">
          <CommandInput placeholder="Author" />
          <CommandList>
            <CommandEmpty>No Author</CommandEmpty>
            <CommandItem>Henry Dioniz</CommandItem>
            <CommandItem>Henry Dioniz</CommandItem>
            <CommandItem>Henry Dioniz</CommandItem>
            <CommandItem>Henry Dioniz</CommandItem>
          </CommandList>
        </Command>
        <CardFooter className="mt-4 flex gap-1">
          <div className="border rounded-full w-8 h-8 bg-secondary">
            <Image
              className="object-cover w-full p-1"
              alt="facebook"
              src={Facebook}
            />
          </div>

          <div className="border rounded-full w-8 h-8 bg-secondary">
            <Image className="object-cover w-full p-1" alt="x" src={X} />
          </div>

          <div className="border rounded-full w-8 h-8 bg-secondary">
            <Image
              className="object-cover w-full p-1"
              alt="Instgram"
              src={Instgram}
            />
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

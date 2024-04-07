import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import SearchAuthor from "./searchAuthor";

export default function Menu() {
  return (
    <div className="block sm:hidden mt-2.5 sticky top-1 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full" size={"icon"}>
            <MenuIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="border-none p-1 absolute top-64 pl-4">
          <SearchAuthor />
        </DialogContent>
      </Dialog>
    </div>
  );
}

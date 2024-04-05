import React from "react";
import { Command, CommandInput } from "./ui/command";

export default function SearchAuthor() {
  return (
    <div>
      <Command>
        <CommandInput placeholder="Author" />
      </Command>
    </div>
  );
}

import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "./ui/command";

import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export default function SearchAuthor() {
  return (
    <Command className="rounded border shadow-md h-auto sticky top-0 mt-1">
      <CommandInput placeholder="search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Work togather">
          <CommandItem>
            <SocialIcon
              network="github"
              url="https://github.com/Henryle-hd/quotes"
              style={{ height: 25, width: 25 }}
            />
            <span className="pl-1">Github</span>
          </CommandItem>
          <CommandItem>
            <SocialIcon
              url="https://www.linkedin.com/in/henry-dioniz-99897924b/"
              style={{ height: 25, width: 25 }}
              bgColor="#333"
            />
            <span className="pl-1">Linkedin</span>
          </CommandItem>
          {/* <CommandItem>
            <span>Launch</span>
          </CommandItem> */}
        </CommandGroup>

        <CommandGroup heading="Social Media">
          <CommandItem>
            <SocialIcon
              url="https://www.instagram.com/easyone2303/"
              style={{ height: 25, width: 25 }}
              bgColor="#333"
            />
            <span className="pl-1">Instagram</span>
          </CommandItem>
          <CommandItem>
            <SocialIcon
              url="https://twitter.com/Henrylee_hd"
              style={{ height: 25, width: 25 }}
              bgColor="#333"
            />
            <span className="pl-1">Twitter</span>
          </CommandItem>
          <CommandItem>
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100095338817546"
              style={{ height: 25, width: 25 }}
              bgColor="#333"
            />
            <span className="pl-1">Facebook</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      <CommandList>
        {/* blog article link  */}
        <CommandGroup heading=" Blog article">
          <CommandItem>
            <SocialIcon
              network=""
              bgColor="#333"
              url="https://dev.to/henrylehd"
              style={{ height: 25, width: 25 }}
            />
            <span className="pl-1">Dev community</span>
          </CommandItem>
          <CommandItem>
            <SocialIcon
              url="https://easyone.hashnode.dev/"
              style={{ height: 25, width: 25 }}
              bgColor="#333"
            />
            <span className="pl-1">easyone</span>
          </CommandItem>
          {/* <CommandItem>
            <span>Launch</span>
          </CommandItem> */}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

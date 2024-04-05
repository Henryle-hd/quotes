import React from "react";
import { Card, CardContent, CardDescription } from "./ui/card";

import Blogpost1 from "@/app/assets/blogPost/type  vs interface.jpg";
import Blogpost2 from "@/app/assets/blogPost/isReact frameWork.png";
import Blogpost3 from "@/app/assets/blogPost/type-vs-javascript cover.png";
import Blogpost4 from "@/app/assets/karenClark.jpg";

import Image from "next/image";

export default function Asideright() {
  return (
    <Card className="sticky top-0 md:flex max-h-[100vh] min-h-screen   flex-col justify-start gap-2 overflow-hidden rounded-l-none rounded-r-sm px-1 border-r-0 z-20 hidden">
      <CardContent className="mt-2 flex flex-col gap-1">
        <CardDescription>Recent blog</CardDescription>
        <div className="flex flex-col gap-12 h-60 overflow-scroll">
          <div className="border w-full h-24 mt-2">
            <Image alt="1" src={Blogpost1} className="" />
          </div>

          <div className="border w-full h-24 mt-2">
            <Image alt="1" src={Blogpost2} className="" />
          </div>

          <div className="border w-full h-24 mt-14">
            <Image alt="1" src={Blogpost3} className="" />
          </div>
        </div>
        <CardDescription className="mt-7">Gallery</CardDescription>

        <div className="border w-full h-72 mt-2">
          <Image alt="1" src={Blogpost4} className=" h-72" />
        </div>
      </CardContent>
    </Card>
  );
}

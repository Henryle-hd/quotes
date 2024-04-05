"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(true);

  return (
    <nav className="flex justify-center items-center top-0  absolute left-[33.3%]  w-[33.5%] z-10 ">
      <div className="w-full h-12 border border-l-0 border-r-0 flex justify-center items-center gap-5">
        <Link
          href={"/"}
          className={isActive ? "text-[#ff5400] underline" : ""}
          onClick={() => setIsActive(true)}
        >
          All
        </Link>
        <Link
          href={"/"}
          className={!isActive ? "text-[#ff5400] underline" : ""}
          onClick={() => setIsActive(false)}
        >
          Liked
        </Link>
      </div>
    </nav>
  );
}
